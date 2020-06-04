import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import shortid from 'shortid'
import cookieParser from 'cookie-parser'
import config from './config'
import Html from '../client/html'

const Root = () => ''

try {
  // eslint-disable-next-line import/no-unresolved
  // ;(async () => {
  //   const items = await import('../dist/assets/js/root.bundle')
  //   console.log(JSON.stringify(items))

  //   Root = (props) => <items.Root {...props} />
  //   console.log(JSON.stringify(items.Root))
  // })()
  console.log(Root)
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

const { readFile, writeFile } = require('fs').promises
const { readdir } = require('fs')

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

const reduceCutObject = (item) => {
  const res = Object.entries(item).reduce((acc, [key, value]) => {
    if (typeof value === 'string' || typeof value === 'boolean') {
      return { ...acc, [key]: value }
    }
    return acc
  }, {})
  return res
}

const cut = (arg) => arg.map((item) => reduceCutObject(item))

const filterByTime = (tasks, timespan) => {
  let timeRange = +new Date()
  if (timespan && timespan === 'day') {
    timeRange = 86400000
  } else if (timespan && timespan === 'week') {
    timeRange = 604800000
  } else if (timespan && timespan === 'month') {
    timeRange = 2592000000
  }
  const result = tasks.reduce((acc, item) => {
    // eslint-disable-next-line
    if (item._createdAt * 1000 + timeRange > +new Date() && !item._isDeleted) {
      return [...acc, item]
    }
    return acc
  }, [])
  return cut(result)
}

const filterById = (tasks, id) => tasks.filter((item) => item.taskId === id)

server.get('/api/v1/tasks/', async (req, res) => {
  await readdir(workDir, (err, categories) => {
    const result = categories.map((category) => {
      return category.substring(0, category.lastIndexOf('.json'))
    })

    return res.json(result)
  })
})

server.get('/api/v1/tasks/:category', async (req, res) => {
  const { category } = req.params
  const taskList = await fileRead(category)
  if (taskList) {
    res.json(taskList)
  } else {
    res.status(404)
  }
  res.end()
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
  if (req.body.title) {
    taskList = [...taskList, newTask]
    fileWrite(category, taskList)
    res.status(200)
  } else {
    res.status(400)
  }
  res.end()
})

server.get('/api/v1/tasks/:category/:timespan', async (req, res) => {
  const { category } = req.params
  const { timespan } = req.params
  const taskList = await fileRead(category)
  const result = filterByTime(taskList, timespan)
  res.json(result)
})

server.patch('/api/v1/tasks/:category/:id', async (req, res) => {
  const { category } = req.params
  const { id } = req.params
  let taskList = await fileRead(category)
  if (req.body.title) {
    taskList = taskList.map((task) => {
      if (task.taskId === id) {
        return { ...task, title: req.body.title }
      }
      return task
    })
    fileWrite(category, taskList)
    res.status(200)

    let task = filterById(taskList, id)
    task = cut(task)
    res.json(task)
  }
  if (req.body.status) {
    if (
      req.body.status === 'done' ||
      req.body.status === 'new' ||
      req.body.status === 'in progress' ||
      req.body.status === 'blocked'
    ) {
      taskList = taskList.map((task) => {
        if (task.taskId === id) {
          return { ...task, status: req.body.status }
        }
        return task
      })
      fileWrite(category, taskList)
      res.status(200)
      let task = filterById(taskList, id)
      task = cut(task)
      res.json(task)
    } else {
      res.status(501)
      res.json({ status: 'error', message: 'incorrect status' })
    }
  }
  res.end()
})

server.delete('/api/v1/tasks/:category/:id', async (req, res) => {
  const { category } = req.params
  const { id } = req.params
  let taskList = await fileRead(category)
  taskList = taskList.map((task) => {
    if (task.taskId === id) {
      return { ...task, _isDeleted: 'true', _deletedAt: +new Date() }
    }
    return task
  })
  fileWrite(category, taskList)
  res.status(200)
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

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
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
