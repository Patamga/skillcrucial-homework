const UPDATE_BASKET = 'UPDATE_BASKET'

const postLog = (logEntry) => {
  fetch('/api/v1/logs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(logEntry)
  })
}
const initialState = {
  sum: 0,
  items: {}
}
const calculateSum = (items) => {
  return Object.values(items).reduce((acc, item) => {
    return acc + item.qty * item.price
  }, 0)
}
export default (basket = initialState, action) => {
  switch (action.type) {
    case UPDATE_BASKET: {
      let productQuantity = action.qty

      let logMessage = `Product ${action.title} has been added to the basket`
      if (action.qty < 0) {
        logMessage = `Product ${action.title} has been removed from the basket`
      }
      const logDate = new Date()
      const logEntry = {
        date: logDate,
        message: logMessage
      }
      postLog(logEntry)

      if (action.id in basket.items) {
        productQuantity += basket.items[action.id].qty
      }

      if (productQuantity < 1) {
        const {[action.id]: _, ...rest} = basket.items
        const newSum = calculateSum(rest)
        return { sum: newSum, items: rest }
      }

      const newItemList = {
        ...basket.items,
        [action.id]: { qty: productQuantity, price: action.price }
      }
      const newSum = calculateSum(newItemList)
      const result = { sum: newSum, items: newItemList }
      console.log(result)
      return result
    }
    default:
      return basket
  }
}

export function addQuantity(id, title, price) {
  const qty = 1
  const action = { type: UPDATE_BASKET, id, title, qty, price }
  return action
}

export function removeQuantity(id, title, price) {
  const qty = -1
  return { type: UPDATE_BASKET, id, title, qty, price }
}
