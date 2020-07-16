import React from 'react'

// import { useSelector } from 'react-redux'
// import MessagesList from './messagesList'

import TopBar from './topBar'
import AddMessage from './addMessage'
import MessageList from './messageList'

const ChatContent = () => {
  // const channel = useSelector((s) => s.channel.channel)

  // const messag = channel.messages
  // console.log('channel.messages', channel)

  return (
    <div>
      <TopBar />
      <div className="px-6 py-4 flex-1 overflow-scroll-x">
        <MessageList />{' '}
      </div>
      <AddMessage />
    </div>
  )
}

ChatContent.propTypes = {}

export default React.memo(ChatContent)
