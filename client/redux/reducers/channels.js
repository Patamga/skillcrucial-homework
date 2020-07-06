// const UPDATE_CHANNEL = 'UPDATE_CHANNEL'
const ADD_MESSAGE = 'ADD_MESSAGE'
// const SUBSCRIBE_USER = 'SUBSCRIBE_USER'



const getChannelList = () => {
  fetch('/api/v1/channels').then((res) => {
    return res.json()
  }).then((data) => {
    console.log('Data', data)
    return data
  })
}
const channelList = getChannelList()

export default (channels = channelList, action) => {
  switch (action.type) {
    // case UPDATE_CHANNEL: {
    // }
    case ADD_MESSAGE: {
      const channel = channels.reduce((acc, rec) => {
        if (rec.name === action.channel) {
          return rec
        }
        return acc
      }, {})
      if (channel) {
        const newMessage = {
          userid: action.userId,
          userName: action.userName,
          messageId: channel.messages.length,
          text: action.text,
          date: new Date(),
          meta: {}
        }

        channel.messages = [...channel.messages, newMessage]
        return [...channels]
      }
      return channels
    }

    // case SUBSCRIBE_USER: {

    // }
    default:
      return channels
  }
}

export function addMessage(userId, channel, text) {
  return { type: ADD_MESSAGE, userId, channel, text }
}
// export function subscribeUser(name, avatar, hashTag) {
//   return { type: SUBSCRIBE_USER, name, avatar, hashTag }
// }
