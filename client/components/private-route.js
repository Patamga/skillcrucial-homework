import React from 'react'
import Sidebar from './sidebar'
import ChatContent from './chatContent'

const Slack = () => {
  return (
    <div className="w-full border shadow">
      <div className="flex">
        <Sidebar />
        <div className="w-full flex flex-col bg-gray-100">
          <ChatContent />
        </div>
      </div>
    </div>
  )
}
Slack.propTypes = {}

export default React.memo(Slack)
