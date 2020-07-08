const INIT_USER_CHANNELS = 'INIT_USER_CHANNELS'


const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    // case ADD_CHANNEL: {

    // }
    case INIT_USER_CHANNELS: {
      return action.channels
    }
    default:
      return state
  }
}

export function initUserChannels(id) {
  const userid = id
  return (dispatch) => {
    fetch(`/api/v1/channels/${userid}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data)
        dispatch({ type: INIT_USER_CHANNELS, channels: data })
      })
  }
}

