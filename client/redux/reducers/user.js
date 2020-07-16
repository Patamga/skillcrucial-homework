const INIT_USER_CHANNELS_LIST = 'INIT_USER_CHANNELS_LIST'

const initialState = {
  channelList: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_USER_CHANNELS_LIST: {
      return { ...state, channelList: action.channelList }
    }
    default:
      return state
  }
}

export function addChannelsList(id) {
  const userid = id
  return (dispatch) => {
    fetch(`/api/v1/userchannels/${userid}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: INIT_USER_CHANNELS_LIST, channelList: data })
      })
  }
}
