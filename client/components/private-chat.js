import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CreateChannelForm from './createChannelForm'
import Sidebar from './sidebar'
import StartChat from './startChatContent'
import ChatContent from './chatContent'

const Chat = () => {
  const currentUser = useSelector((store) => store.authentication.user)
  const userRole = currentUser.role
  const userId = currentUser._id

  return (
    <div>
      {userRole.includes('admin') && (
        <div className="h-8 bg-gray-900 text-white text-base pl-5 pt-1">
          {' '}
          Admin panel
          <Link to="/private/admin" className="pl-5 pt-1 text-gray-200">
            admin page
          </Link>
        </div>
      )}

      <div className="w-full border shadow">
        <div className="flex">
          <Sidebar />
          <div className=" h-screen flex flex-col bg-gray-100">
            <Switch>
              <Route exact path="/private/" component={() => <StartChat />} />
              <Route
                exact
                path="/private/create"
                component={() => <CreateChannelForm userId={userId} />}
              />
              <Route exact path="/private/:channel" component={() => <ChatContent />} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

Chat.propTypes = {}

export default React.memo(Chat)
