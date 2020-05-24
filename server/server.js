import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import shortid from 'shortid'
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

const { readFile, writeFile } = require('fs').promises

const workDir = `${process.cwd()}/tasks/`

const fileWrite = async (category, data) => {
  return writeFile(`${workDir}/${category}.json`, JSON.stringify(data), { encoding: 'utf8' })
}

const fileRead = async (category) => {
  return readFile(`${workDir}/${category}.json`, { encoding: 'utf8' })
    .then((data) => JSON.parse(data))
    .catch(async () => {
      await fileWrite(category, [])
    })
}

server.get('/api/v1/tasks/:category', async (req, res) => {
  const { category } = req.params
  const taskList = await fileRead(category)
  const result = taskList.map((item) => {
    const rs = Object.entries(item).reduce((acc, [key, value]) => {
      if (typeof value === 'string' || typeof value === 'boolean') {
        return { ...acc, [key]: value }
      }
      return acc
    }, {})
    // const rs = Object.keys(item).reduce((acc, rec) => {
    //   if (typeof item[rec] === 'string' || typeof item[rec] === 'boolean') {
    //     return { ...acc, [rec]: item[rec] }
    //   }
    //   return acc
    // }, {})
    return rs
  })

  res.json(result)
})

server.post('/api/v1/tasks/:category', async (req, res) => {
  const { category } = req.params
  let taskList = await fileRead(category)
  const newTask = {
    taskId: shortid.generate(),
    title: req.body.title,
    status: 'new',
    _isDeleted: false,
    _createdAt: +new Date(),
    _deletedAt: null
  }
  taskList = [...taskList, newTask]
  fileWrite(category, taskList)
  res.status(200)
  res.end()
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
