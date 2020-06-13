const CHANGE_CURRENCY = 'CHANGE_CURRENCY'
// const UPDATE_RATE = 'UPDATE_RATE'

const initialState = {
  currency: 'EUR',
  rate: 1
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
    case CHANGE_CURRENCY: {
      const logEntry = {date: new Date(), message: `Currency changed from ${state.currency} to ${action.currency}`}
      postLog(logEntry)
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
  return { type: CHANGE_CURRENCY, currency, rate }
}
