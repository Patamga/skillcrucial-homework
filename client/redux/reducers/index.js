import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import chan from './chan'
import registration from './registration'
import users from './users'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    chan,
    registration,
    users
  })

export default createRootReducer
