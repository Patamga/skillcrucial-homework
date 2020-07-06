const INIT_USERS = 'INIT_USERS'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    // case ADD_CHANNEL: {

    // }
    case INIT_USERS: {
      return action.users
    }
    default:
      return state
  }
}

export function initUsers() {
  return (dispatch) => {
    fetch('/api/v1/users')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: INIT_USERS, users: data })
      })
  }
}
