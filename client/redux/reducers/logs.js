const InitialState = {
  list: []
}

export default (state = InitialState, action) => {
  if (action.type.indexOf('LOCATION') > 0) {
    return state
  }
  if (action.type === 'INITIAL_LOG_LOAD') > 0) {
    return state
  }
  return {
    ...sate,
    list: [...state.list, action]
  }
}