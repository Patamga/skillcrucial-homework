import React from 'react'
import Message from './message'



const ChatContent = () => {
  return (
    <div className="px-6 py-4 flex-1 overflow-scroll-x">
      {/* A message  */}
      <Message />

      {/*  A message */}
     
    </div>
  )
}

ChatContent.propTypes = {}

export default React.memo(ChatContent)
