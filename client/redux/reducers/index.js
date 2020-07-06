import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import chan from './chan'
import registration from './registration'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    chan,
    registration

  })

export default createRootReducer
