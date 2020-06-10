const UPDATE_CURRENCY = 'UPDATE_CURRENCY'
// const UPDATE_RATE = 'UPDATE_RATE'

const initialState = {
  currensy: 'EUR',
  rate: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENCY:
      return {
        ...state,
        currensy: action.currensy,
        rate: action.rate
      }
    default:
      return state
  }
}

export function updateCurrency(currensy, rate) {
  return { type: UPDATE_CURRENCY, currensy, rate}
}
