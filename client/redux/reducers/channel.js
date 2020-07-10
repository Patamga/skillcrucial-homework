
const CURRENT_CHANNEL = 'CURRENT_CHANNEL'
const USERS = 'USERS'
let arrUsers = []

const initialState = {
  currentChannel: {},
  users: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_CHANNEL: {
      return { ...state, currentChannel: action.currentChannel }
    }
    case USERS: {
      return { ...state, users: action.users }
    }
    default:
      return state
  }
}

export function usersInChannel() {
  return (dispatch) => {
    fetch('/api/v1/userschannel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        arrUsers
      })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: USERS, users: data })
      })
      // .catch((error) => {
      //   console.log(error)
      //   alert('Error: User ')
      // })
  }
}

export function currentChannels(name) {
  const channelName = name
  return (dispatch) => {
    fetch(`/api/v1/channel/${channelName}`)
      .then((res) => {
        // res.text().then((s) => console.log('Received rsponse',s))
        return res.json()
      })
      .then((data) => {
        dispatch({ type: CURRENT_CHANNEL, currentChannel: data })
        arrUsers = data.usersId
        dispatch(usersInChannel())
      })
  }
}
