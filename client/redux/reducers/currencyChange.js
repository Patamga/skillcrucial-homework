const UPDATE_CURRENCY = 'UPDATE_CURRENCY'
// const UPDATE_RATE = 'UPDATE_RATE'

const initialState = {
  currency: 'EUR',
  rate: 1
}

// const postLog = (entry) => {
//   fetch('/api/v1/logs', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(entry)
//   })
// }
export default (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_CURRENCY: {
      // const logEntry = {date: new Date(), message: `Currency changed from ${state.currency} to ${action.currency}`}
      // postLog(logEntry)
      return {
        ...state,
        currency: action.currency,
        rate: action.rate
      }
    }
    default:
      return state
  }
}

export function updateCurrency(currency, rate) {
  return { type: UPDATE_CURRENCY, currency, rate }
}
