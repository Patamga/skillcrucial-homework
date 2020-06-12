const INITIAL_LOG_LOAD = 'INITIAL_LOG_LOAD'

const InitialState = {
  list: []
}

export default (state = InitialState, action) => {
  console.log('Action handled', action)

  if (action.type.indexOf('LOCATION') > 0) {
    return state
  }

  if (action.type === INITIAL_LOG_LOAD) {
    return { ...state, list: action.list }
  }

  fetch('/api/v1/logs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      date: new Date(),
      message: `${state} to ${action}`
    })
  })
  return {
    ...state,
    list: [...state.list, action]
  }
}
