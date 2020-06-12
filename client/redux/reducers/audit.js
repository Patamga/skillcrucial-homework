// const INITIAL_LOG_LOAD = 'INITIAL_LOG_LOAD'
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const InitialState = {
  list: []
}

export default (state = InitialState, action) => {
  console.log('Action handled', action)
  if (action.type.indexOf('@@') !==0) {
    const logDate = (new Date()).toLocaleString('ru-RU')
    fetch('/api/v1/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...action, date: logDate })
    })
  }
  return {
    ...state,
    list: [...state.list, action]
  }
}
