/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Redirect, StaticRouter } from 'react-router-dom'

import store, { history } from '../redux'

import Home from '../components/home'
import DummyView from '../components/dummy-view'
import Dummy1 from '../components/microtasks/1'
import Dummy2 from '../components/microtasks/2'
import Dummy3 from '../components/microtasks/3'
import Dummy4 from '../components/microtasks/4'
import Dummy5 from '../components/microtasks/5'
import Dummy6 from '../components/microtasks/6'
import Dummy7 from '../components/microtasks/7'
import Dummy8 from '../components/microtasks/8'
import Dummy9 from '../components/microtasks/9'

import Microtask2 from '../components/microtask2/component'
import NotFound from '../components/404'

import Startup from './startup'

const OnlyAnonymousRoute = ({ component: Component, ...rest }) => {
  const func = (props) =>
    !!rest.user && !!rest.user.name && !!rest.token ? (
      <Redirect to={{ pathname: '/' }} />
    ) : (
      <Component {...props} />
    )
  return <Route {...rest} render={func} />
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const func = (props) =>
    !!rest.user && !!rest.user.name && !!rest.token ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
    )
  return <Route {...rest} render={func} />
}

const types = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  }),
  token: PropTypes.string
}

const defaults = {
  location: {
    pathname: ''
  },
  user: null,
  token: ''
}

OnlyAnonymousRoute.propTypes = types
PrivateRoute.propTypes = types

PrivateRoute.defaultProps = defaults
OnlyAnonymousRoute.defaultProps = defaults

const RouterSelector = (props) =>
  typeof window !== 'undefined' ? <ConnectedRouter {...props} /> : <StaticRouter {...props} />

const RootComponent = (props) => {
  return (
    <Provider store={store}>
      <RouterSelector history={history} location={props.location} context={props.context}>
        <Startup>
          <Switch>
            <Route exact path="/" component={() => <DummyView />} />
            <Route exact path="/1" component={() => <Dummy1 />} />
            <Route exact path="/2" component={() => <Dummy2 />} />
            <Route exact path="/3" component={() => <Dummy3 />} />
            <Route exact path="/4" component={() => <Dummy4 />} />
            <Route exact path="/5" component={() => <Dummy5 />} />
            <Route exact path="/6" component={() => <Dummy6 />} />
            <Route exact path="/7" component={() => <Dummy7 />} />
            <Route exact path="/8" component={() => <Dummy8 />} />
            <Route exact path="/9" component={() => <Dummy9 />} />

            <Route exact path="/microtask2" component={() => <Microtask2 />} />
            <Route exact path="/dashboard" component={() => <Home />} />
            <PrivateRoute exact path="/hidden-route" component={() => <DummyView />} />
            <Route component={() => <NotFound />} />
          </Switch>
        </Startup>
      </RouterSelector>
    </Provider>
  )
}

export default RootComponent
