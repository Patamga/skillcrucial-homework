import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import chan from './chan'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    chan
  })

export default createRootReducer
