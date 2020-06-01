import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import axios from 'axios'

import cookieParser from 'cookie-parser'
import Root from '../client/config/root'

import Html from '../client/html'

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

const { readFile } = require('fs').promises

const workDir = `${process.cwd()}/client/data`

const fileRead = async () => {
  return readFile(`${workDir}/catalog.json`, { encoding: 'utf8' }).then((data) => JSON.parse(data))
}

const readCurrency = async () => {
  return axios('https://api.exchangeratesapi.io/latest').then(({ data }) => {
    return data.rates
  })
}

// const writeLogs = async (logs, data) => {
//   return writeFile(`${workDir}/logs.json`, JSON.stringify(data), { encoding: 'utf8' })
// }

// const readLog = async () => {
//   return readFile(`${workDir}/logs.json`, { encoding: 'utf8' })
//     .then((data) => JSON.parse(data))
//     .catch(async () => {
//       await writeLogs([])
//     })
// }

// server.get('/api/v1/logs', async (req, res) => {
//   const logs = await readLog()
//   res.json(logs)
// })

server.get('/api/v1/catalog', async (req, res) => {
  const catalog = await fileRead()
  res.json(catalog)
})

server.get('/api/v1/usd', async (req, res) => {
  const currency = await readCurrency()
  const usd = JSON.stringify(currency.USD)
  res.json(usd)
})

server.get('/api/v1/cad', async (req, res) => {
  const currency = await readCurrency()
  const cad = JSON.stringify(currency.CAD)
  res.json(cad)
})

const echo = sockjs.createServer()
echo.on('connection', (conn) => {
  connections.push(conn)
  conn.on('data', async () => {})

  conn.on('close', () => {
    connections = connections.filter((c) => c.readyState !== 3)
  })
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

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
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

echo.installHandlers(app, { prefix: '/ws' })

// eslint-disable-next-line no-console
console.log(`Serving at http://localhost:${port}`)
