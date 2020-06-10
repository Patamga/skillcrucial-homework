import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import currencyChange from './currencyChange'
import basket from './basket'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    currencyChange,
    basket
  })

export default createRootReducer
