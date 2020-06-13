const GET_PRODUCTS = 'GET_PRODUCTS'
const SORT_BY_NAME = 'SORT_BY_NAME'
const SORT_BY_PRICE = 'SORT_BY_PRICE'

const initialState = []

const byTitleComparator = (item1, item2) => {
  if (item1.title.toUpperCase() < item2.title.toUpperCase()) {
    return -1
  }
  if (item1.title.toUpperCase() > item2.title.toUpperCase()) {
    return 1
  }
  return 0
}

const byPriceComparator = (item1, item2) => {
  return item1.price - item2.price
}

const postLog = (logEntry) => {
  fetch('/api/v1/logs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(logEntry)
  })
}

export default (state = initialState, action) => {

  switch (action.type) {
    case GET_PRODUCTS:
      return action.list

    case SORT_BY_NAME: {
      const logEntry = { date: new Date(), message: `Catalog has been sorted by the product title` }
      postLog(logEntry)

      return state.sort(byTitleComparator).slice()
    }

    case SORT_BY_PRICE: {
      const logEntry = { date: new Date(), message: `Catalog has been sorted by the product price` }
      postLog(logEntry)
      return state.sort(byPriceComparator).slice()
    }
    default:
      return state
  }
}

export function getProducts() {
  return (dispatch) => {
    fetch('/api/v1/catalog')
      .then((res) => res.json())
      .then((list) => {
        dispatch({ type: GET_PRODUCTS, list })
      })
  }
}

export function sortByName() {
  return { type: SORT_BY_NAME }
}

export function sortByPrice() {
  return { type: SORT_BY_PRICE }
}
