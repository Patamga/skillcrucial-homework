import React, { useState, useEffect } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
// import base64 from 'base-64'
// import utf8 from 'utf8'
// import { history } from '../redux'

import InputComponent from './inputComponent'
import ListTasks from './listTasks'
// import ViewRepo from './viewRepos'
import NotFound from './404'

import Head from './head'
import Header from './headers'

const Home = () => {
  const { categoryName } = useParams()

  const [taskList, setTaskList] = useState([])
 // const [repoDescription, setRepoDescription] = useState('')

  useEffect(() => {
    if (typeof categoryName !== 'undefined') {
      axios
        .get(`http://localhost:8090/api/v1/tasks/${categoryName}`)
        .then(({ data }) => {
          setTaskList(data)
        })
        .catch(() => {
          'уже усть такая'
        })
    }
  }, [categoryName])

  // useEffect(() => {
  //   if (typeof repository !== 'undefined' && typeof categoryName !== 'undefined') {
  //     axios
  //       .get(`https://api.github.com/repos/${categoryName}/${repository}/contents/README.md`)
  //       .then(({ data }) => {
  //         setRepoDescription(utf8.decode(base64.decode(data.content)))
  //       })
  //       .catch(() => {
  //         history.push(`/${categoryName}/${404}`)
  //       })
  //   }
  // }, [repository])

  return (
    <div>
      <Head title="Hello" />
      <div>
        <Header />
      </div>
      <div>
        <Route exact path="/" component={() => <InputComponent />} />
        <Route exact path="/:categoryName" component={() => <ListTasks repos={taskList} />} />
        {/* <Route
          exact
          path="/:categoryName/:repository"
          component={() => <ViewRepo redme={repoDescription} />}
        /> */}
        <Route exact path="/404" component={() => <NotFound repos={taskList} />} />
        <Route exact path="/:userName/404" component={() => <NotFound repos={taskList} />} />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
