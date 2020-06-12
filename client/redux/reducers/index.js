import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import currencyChange from './currencyChange'
import basket from './basket'
import audit from './audit'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    currencyChange,
    basket,
    audit
  })

export default createRootReducer
