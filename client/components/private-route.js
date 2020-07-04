import React from 'react'
import Sidebar from './sidebar'
// import { useSelector } from 'react-redux'
// import { Route } from 'react-router-dom'
import ChatContent from "./chat"
// import ChatChannel from './chatsChannel'

// const userId = 42
const Slack = () => {
  return (
    <div className="w-full border shadow">
      <div className="flex">
        <Sidebar />
        <ChatContent />
      </div>
    </div>
  )
}
Slack.propTypes = {}

export default React.memo(Slack)
