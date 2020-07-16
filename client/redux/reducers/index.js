import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authentication from './authentication'
import registration from './registration'
import channel from './channel'
import user from './user'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    authentication,
    registration,
    channel,
    user
  })

export default createRootReducer
