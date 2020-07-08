import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Message from './message'
import CreateChannel from './channelForm'


const ChatContent = () => {
  const currentUserId = useSelector((store) => store.auth.user)
  const userId = currentUserId._id
  return (
    <div className="px-6 py-4 flex-1 overflow-scroll-x">
      <Switch>
        <Route
          exact
          path="/private/create_channel"
          component={() => <CreateChannel userId={userId} />}
        />
        <Route exact path="/private/:channel" component={() => <Message />} />
      </Switch>
    </div>
  )
}

ChatContent.propTypes = {}

export default React.memo(ChatContent)
