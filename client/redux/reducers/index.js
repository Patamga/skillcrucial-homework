import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import channelList from './channelList'
import registration from './registration'
import users from './users'
import addChannel from './addChannel'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    channelList,
    registration,
    users,
    addChannel
  })

export default createRootReducer
