import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import game from './game'
import number from './number'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    game,
    number
  })

export default createRootReducer
