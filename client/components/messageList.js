import React from 'react'
import { useSelector } from 'react-redux'

import Message from './message'

const MessageList = () => {
  const channel = useSelector((s) => s.channel.channel)
  const messagesList = channel.messages

  return (
    <div>
      {messagesList.map((item, index) => {
        return (
          <div className="flex items-start mb-4" key={index}>
            <Message item={item} />
          </div>
        )
      })}
    </div>
  )
}
MessageList.propTypes = {}

export default MessageList
