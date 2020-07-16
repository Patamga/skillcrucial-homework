import { history } from '..'
import { addChannelsList } from './user'

const CREATE_CHANNEL_NAME = 'CREATE_CHANNEL_NAME'
const ADD_MESSAGE = 'ADD_MESSAGE'
const CHANNEL = 'CHANNEL'
const USERS = 'USERS'


const initialState = {
  channel: {
    channelName: '',
    messages: []
  },
  name: '',
  addmessage: '',
  users: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANNEL: {
      return { ...state, channel: action.channel }
    }
    case USERS: {
      return { ...state, users: action.users }
    }
    case CREATE_CHANNEL_NAME: {
      return { ...state, name: action.name }
    }
    case ADD_MESSAGE: {
      return { ...state, addmessage: action.addmessage }
    }
    default:
      return state
  }
}

export function updateChannelNameField(name) {
  return { type: CREATE_CHANNEL_NAME, name }
}

export function updateAddMessageField(addmessage) {
  return { type: ADD_MESSAGE, addmessage }
}

export function usersInChannel(arrId) {
  return (dispatch) => {
    fetch('/api/v1/users-in-channel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ arrUsers: arrId })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: USERS, users: data })
      })
      .catch((error) => {
        console.log(error)
        alert('Error: User ')
      })
  }
}

export function actualChannel(name) {
  const channelName = name
  return (dispatch) => {
    fetch(`/api/v1/channel/${channelName}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: CHANNEL, channel: data })
        dispatch(usersInChannel(data.usersId))
      })
  }
}

export function createChannel(id) {
  const userId = id
  return (dispatch, getState) => {
    const channelName = getState().channel.name
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
        dispatch({ type: CHANNEL, channel: data })
        history.push(`/private/${channelName}`)
        dispatch(addChannelsList(userId))
        dispatch(usersInChannel(data.usersId))
        // dispatch(updateChannelNameField(''))
      })
      .catch((error) => {
        console.log(error)
        alert('Error: channel')
      })
  }
}

export function seveMessage(id) {
  const userId = id
  return (dispatch, getState) => {
    const message = getState().channel.addmessage
    const channel = getState().channel.channel._id
    console.log('server111', userId, message, channel)
    fetch('/api/v1/add_message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: message,
        userId,
        _id: channel
      })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: CHANNEL, channel: data })
      })
      .catch((error) => {
        console.log(error)
        alert('Error: channel')
      })
  }
}

