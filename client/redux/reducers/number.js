const NEW_NUMBER = 'NEW_NUMBER'

const initialState = {
  num: 0

}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_NUMBER':
      return {
        ...state,
        num: action.num
      }
    default:
      return state
  }
}

export function newNumber(num) {
  return { type: NEW_NUMBER, num }
}