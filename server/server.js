import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import axios from 'axios'
import cookieParser from 'cookie-parser'
import config from './config'
import Html from '../client/html'

const Root = () => ''

try {
  // eslint-disable-next-line import/no-unresolved
  // (async () => {
  //   const items = await import('../dist/assets/js/root.bundle')
  //   console.log(JSON.stringify(items))
  //   Root = (props) => <items.Root {...props} />
  //   console.log(JSON.stringify(items.Root))
  // })()
} catch (ex) {
  console.log(' run yarn build:prod to enable ssr')
}

let connections = []

const port = process.env.PORT || 8090
const server = express()

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  bodyParser.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

const { readFile, writeFile, unlink } = require('fs').promises

const workDir = `${process.cwd()}/client/catalog`
const logDir = `${process.cwd()}/logs`
const fileRead = async () => {
  return readFile(`${workDir}/data.json`, { encoding: 'utf8' }).then((data) => JSON.parse(data))
}

const LogsWrite = async (data) => {
  return writeFile(`${logDir}/logs.json`, JSON.stringify(data), { encoding: 'utf8' })
}

const LogsRead = async () => {
  return readFile(`${logDir}/logs.json`, { encoding: 'utf8' })
    .then((data) => JSON.parse(data))
    .catch(async () => {
      await LogsWrite([])
    })
}

const LogsDelete = async () => {
  return unlink(`${logDir}/logs.json`)
}

const readCurrency = async () => {
  const { data } = await axios('https://api.exchangeratesapi.io/latest')
  return data.rates
}

server.get('/api/v1/catalog', async (req, res) => {
  const catalog = await fileRead()
  res.json(catalog.slice(0, 100))
})

server.get('/api/v1/rates', async (req, res) => {
  const rates = await readCurrency()
  const result = { USD: rates.USD, CAD: rates.CAD, EUR: 1 }
  res.send(result)
})

server.get('/api/v1/logs', async (req, res) => {
  console.log('Log request')
  await readFile(`${logDir}/logs.json`, { encoding: 'utf8' })
    .then((data) => {
      res.send(data)
    }).catch ((reason) => {
      console.log('not found', reason)
      res.status(404)
    })
  res.end()
})

server.post('/api/v1/logs', async (req, res) => {

  let logs = await LogsRead()
  if (!logs) {
    logs =[]
  }
  if (req.body) {
    logs = [...logs, req.body]
    LogsWrite(logs)
    res.status(200)
  } else {
    res.status(400)
  }
  res.end()
})

server.delete('/api/v1/logs', async (req, res) => {
  await LogsDelete()
  res.status(200)
  res.end()
})

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const [htmlStart, htmlEnd] = Html({
  body: 'separator',
  title: 'Skillcrucial - Become an IT HERO'
}).split('separator')

server.get('/', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  return res.send(
    Html({
      body: '',
      initialState
    })
  )
})

const app = server.listen(port)

if (config.isSocketsEnabled) {
  const echo = sockjs.createServer()
  echo.on('connection', (conn) => {
    connections.push(conn)
    conn.on('data', async () => {})

    conn.on('close', () => {
      connections = connections.filter((c) => c.readyState !== 3)
    })
  })
  echo.installHandlers(app, { prefix: '/ws' })
}
console.log(`Serving at http://localhost:${port}`)
