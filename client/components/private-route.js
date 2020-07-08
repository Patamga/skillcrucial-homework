import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from './sidebar'

// import { Route } from 'react-router-dom'
import TopBar from './topBar'
import AddMessage from './addMessage'
import ChatContent from './chatContent'

const Slack = () => {
  const currentUser = useSelector((store) => store.auth.user)
  return (
    <div className="w-full border shadow">
      <div className="flex">
        <Sidebar currentUser={currentUser} />
        <div className="w-full flex flex-col bg-gray-100">
          <TopBar />
          <ChatContent />
          <AddMessage />
        </div>
      </div>
    </div>
  )
}
Slack.propTypes = {}

export default React.memo(Slack)
