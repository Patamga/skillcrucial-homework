import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AdminPage from './privte-admin'
import Chat from './private-chat'

const Private = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      <Switch>
        <Route exact path="/private/" component={() => <Chat />} />
        <Route exact path="/private/admin" component={() => <AdminPage />} />
        <Route exact path="/private/*" component={() => <Chat />} />
      </Switch>
    </div>
  )
}
Private.propTypes = {}

export default React.memo(Private)
