import React from 'react'
import TopBar from './topBar'
import AddMessage from './addMessage'
import ChatContent from './chatContent'

const Chat = () => {
  return (
    <div className="w-full flex flex-col bg-gray-100">
      <TopBar />
      <ChatContent />
      <AddMessage />
    </div>
  )
}

Chat.propTypes = {}

export default React.memo(Chat)
