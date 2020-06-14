import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import currencyChange from './currencyChange'
import basket from './basket'
import products from './products'


const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    currencyChange,
    basket,
    products
  })

export default createRootReducer
