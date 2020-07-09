const USERS = 'USERS'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS: {
      return action.users
    }
    default:
      return state
  }
}

export function usersInChannel() {
  return (dispatch, getState) => {
    const { users } = getState().channel.usersId

    fetch('/api/v1/userschannel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        users
      })
    })
      .then((res) => {
        console.log(res.ok, res)
        if (!res.ok) throw res
        return res.json()
      })
      .then((data) => {
        dispatch({ type: USERS, users: data })
      })
      .catch((error) => {
        console.log(error)
        alert('Error: User ')
      })
  }
}

// export function currentChannels(name) {
//   const channelName = name
//   return (dispatch) => {
//     fetch(`/api/v1/channel/${channelName}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log('data channel', data)
//         dispatch({ type: CURRENT_CHANNEL, channel: data })
//         dispatch(usersChannel())
//       })
//   }
// }