import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import jwt from 'jsonwebtoken'

import mongooseService from './services/mongoose'
import passportJWT from './services/passport'
import auth from './middleware/auth'

import config from './config'
import Html from '../client/html'
import User from './model/User.model'
import Channel from './model/Channel.model'

const Root = () => ''

mongooseService.connect()

// const user = new User({
//   email: 'test6@gmail.com',
//   password: 'test6'
// })
// user.save()

// const channel = new Channel({
//   channelName: 'main',
//   usersId: ['112', '113', '114'],
//   messages: [
//     {
//     userId: '114',
//     text: 'You can configure those colors explicitly',
//     },
//     {
//     userId: '112',
//     text: 'Bad news: color is complicated and weve yet to find a tool that does a good job generating these sorts of color palettes. We picked all of Tailwinds default colors by hand, balancing them by eye. Sorry!',
//     }
//   ]
// })
// channel.save()

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
  passport.initialize(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  bodyParser.json({ limit: '50mb', extended: true }),
  cookieParser()
]
  passport.use('jwt', passportJWT.jwt);

middleware.forEach((it) => server.use(it))

server.get('/api/v1/user-info', auth(['admin']), (req, res) => {
  res.json({ status: '123' })
})

server.get('/api/v1/channels', async (req, res) => {
  Channel.find({}, (err, channels) => {
    console.log('Channels', channels)
    if (!err) {
      res.send(channels)
    } else {
      res.send(err)
    }
  res.end()
  })
})

server.post('/api/v1/channels', async (req, res) => {

  const channel = new Channel({
    channelName: req.body.channelName,
    usersId: req.body.usersId,
  })
  channel.save((err) => {
    if (!err) {
      Channel.find({}, (err, channels) => {
        if (!err) {
          res.send(channels)
        } else {
          res.send(err)
        }
        res.end()
      })
    }
  })
})

server.get('/api/v1/auth', async (req, res) => {
  try {
    const jwtUser = jwt.verify(req.cookies.token, config.secret)
    const user = await User.findById(jwtUser.uid)

    const payload = { uid: user.id }
    const token = jwt.sign(payload, config.secret, { expiresIn: '48h' })
    delete user.password
    res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 48 })
    res.json({ status: 'ok', token, user })
  } catch (err) {
    console.log(err)
    res.json({ status: 'error', err })
  }
})

server.post('/api/v1/auth', async (req, res) => {
  // console.log(req.body)
  try {
    const user = await User.findAndValidateUser(req.body)
    const payload = { uid: user.id }
    const token = jwt.sign(payload, config.secret, { expiresIn: '48h' })
    delete user.password
    res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 48 })
    res.json({ status: 'ok', token, user })
  } catch (err) {
    console.log(err)
    res.json({ status: 'error', err })
  }
})

server.post('/api/v1/registration', async (req, res) => {
  // console.log(req.body)
  try {
    const user = await User.createAccount(req.body)
    console.log('uerId', user.id)
    const payload = { uid: user.id }
    const token = jwt.sign(payload, config.secret, { expiresIn: '48h' })
    delete user.password


    res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 48 })
    res.json({ status: 'ok', token, user })
  } catch (err) {
    res.status(400).json('Error')
  }
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
