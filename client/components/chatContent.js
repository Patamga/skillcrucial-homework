import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import MessagesList from './messagesList'
import MessagesList from './test'
import CreateChannel from './channelForm'
import TopBar from './topBar'
import AddMessage from './addMessage'
import AllChannel from './allChannels'

const ChatContent = () => {

  const currentUserId = useSelector((store) => store.auth.user)
  const channel = useSelector((s) => s.channel.currentChannel)
  const name = channel.channelName
  const messag = channel.messages
  console.log('channel.messages', messag)
  const userId = currentUserId._id
  return (
    <div>
      <TopBar name={name} />
      <div className="px-6 py-4 flex-1 overflow-scroll-x">
        <Switch>
          <Route
            exact
            path="/private/create_channel"
            component={() => <CreateChannel userId={userId} />}
          />
          <Route
            exact
            path="/private/:channel"
            component={() => <MessagesList messag={messag} />}
          />
          <Route exact path="/private/allchannels" component={() => <AllChannel />} />
        </Switch>
      </div>
      <AddMessage />
    </div>
  )
}

ChatContent.propTypes = {}

export default React.memo(ChatContent)
