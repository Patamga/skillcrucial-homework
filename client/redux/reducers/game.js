const UPDATE_FIELD = 'UPDATE_FIELD'

const initialState = {
  row: 0,
  column: 0,
  lenght: 0

}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        row: action.row,
        column: action.column,
        lenght: action.lenght
      }
    default:
      return state
  }
}

export function updateField(row, column, lenght) {
  return { type: UPDATE_FIELD, row, column, lenght }
}
