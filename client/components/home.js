import React from 'react'
import { Route } from 'react-router-dom'
import InputComponent from './inputComponent'
import ListRepositorys from './listRepositorys'
import ViewRepo from './viewRepos'

import Head from './head'
import Header from './header'

const Home = () => {
  return (
    <div>
      <Head title="Hello" />
      <div>
        <Header />
      </div>

      <div>
        {/* <Switch> */}
        <Route exact path="/" component={() => <InputComponent />} />
        <Route exact path="/:userName" component={() => <ListRepositorys />} />
        <Route exact path="/:userName/:repository" component={() => <ViewRepo />} />
        {/* </Switch> */}
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
