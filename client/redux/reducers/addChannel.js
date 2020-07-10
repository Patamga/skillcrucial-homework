import { history } from '..'
import { currentChannels } from './channel'

const CREATE_CHANNEL_NAME = 'CREATE_CHANNEL_NAME'
const CHANNEL = 'CHANNEL'

const initialState = {
  channelName: '',
  userId: '',
  channel: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CHANNEL_NAME: {
      return { ...state, channelName: action.channelName }
    }
    case CHANNEL: {
      return { ...state, channel: action.channel }
    }
    default:
      return state
  }
}

export function updateChannelNameField(channelName) {
  return { type: CREATE_CHANNEL_NAME, channelName }
}

export function createChannel(id) {
  const userId = id
  return (dispatch, getState) => {
    const { channelName } = getState().addChannel
    console.log( 'create 1', JSON.stringify({
        channelName,
        userId}) )
    fetch('/api/v1/add_channel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        channelName,
        userId

      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('create2 data', data)
        dispatch({ type: CHANNEL, channelName: data.channelName, userId: data._id })
        history.push(`/private/${channelName}`)
        dispatch(currentChannels(data.channelName))
      })
      .catch((error) => {
        console.log(error)
        alert('Error: channel')
      })
  }
}


