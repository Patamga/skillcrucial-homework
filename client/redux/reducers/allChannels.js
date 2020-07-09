const ALL_CHANNELS = 'ALL_CHANNELS'


const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    // case ADD_CHANNEL: {

    // }
    case ALL_CHANNELS: {
      return action.channels
    }
    default:
      return state
  }
}

export function allChannels() {
  return (dispatch) => {
    fetch('/api/v1/channels')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ALL_CHANNELS, data })
      })
  }
}

