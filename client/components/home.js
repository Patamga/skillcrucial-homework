import React from 'react'
import { Route } from 'react-router-dom'
import InputComponent from './inputComponent'
import ListRepositorys from './listRepositorys'
import ViewRepo from './viewRepo'

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
        <Route path="/:userName" component={() => <ListRepositorys />} />
        <Route path="/:userName/:repository" component={() => <ViewRepo />} />
        {/* </Switch> */}
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
