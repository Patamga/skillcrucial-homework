import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Sidebar from './sidebar'
import StartUser from './startUser'
// import MessagesList from './messagesList'
import MessagesList from './testo'
import CreateChannel from './channelForm'
import AllChannel from './allChannels'


const Slack = () => {
  const currentUser = useSelector((store) => store.auth.user)
  // const channel = useSelector((s) => s.channel.currentChannel)
  // const messag = channel.messages
  const userId = currentUser._id
  const userName = currentUser.username


  return (
    <div className="w-full border shadow">
      <div className="flex">
        <Sidebar />
        <div className="w-full h-screen flex flex-col bg-gray-100">
          <Switch>
            <Route exact path="/private/" component={() => <StartUser userName={userName} />} />
            <Route
              exact
              path="/private/create"
              component={() => <CreateChannel userId={userId} />}
            />
            <Route exact path="/private/allchannels" component={() => <AllChannel />} />
            <Route
              exact
              path="/private/:channel"
              component={() => <MessagesList />}
            />
            <Route exact path="/private/allchannels" component={() => <AllChannel />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}
Slack.propTypes = {}

export default React.memo(Slack)
