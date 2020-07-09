const CURRENT_USER = 'CURRENT_USER'
const INIT_USER_CHANNELS = 'INIT_USER_CHANNELS'
let userid = ''


const initialState = {
  currentUser: {},
  channels: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER: {
      return { ...state, currentUser: action.currentUser }
    }
    case INIT_USER_CHANNELS: {
      return { ...state, channels: action.channels }
    }

    default:
      return state
  }
}

export function initUser () {
  return (dispatch, getState) => {
    const p = getState().auth.user
    dispatch({ type: CURRENT_USER, currentUser: p })
    userid = p._id
  }
}

export function initUserChannels() {
  return (dispatch ) => {
    fetch(`/api/v1/channels/${userid}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data cannelLict', data)
        dispatch({ type: INIT_USER_CHANNELS, channels: data })
      })
  }
}
