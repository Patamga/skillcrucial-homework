import React, { useState, useEffect } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import InputComponent from './inputComponent'
import ListRepositorys from './listRepositorys'
import ViewRepo from './viewRepo'

import Head from './head'
// import Header from './header'

const Home = () => {
  const { username } = useParams()
  // eslint-disable-next-line
  console.log(username)
  const [counter, setCounterNew] = useState(0)
  const [repositoryList, setRepositoryList] = useState([])
  // const [currentProject, setCurrentProject] = useState('')

  useEffect(() => {
    // if (typeof username !== 'undefined') {
    axios.get(`https://api.github.com/users/patamga/repos`).then(({ data }) => {
      setRepositoryList(data)
    })
    // }
  }, [username])
  // useEffect(() => {
  //   if (typeof repository !== 'undefined') {
  //     axios.get(`https://api.github.com/users/:username/${repository}`).then(({ data }) => {
  //       setCurrentProject(data)
  //     })
  //   }
  // }, [repository])

  return (
    <div>
      <Head title="Hello" />
      {/* <Header projectList/> */}
      {username}
      <button type="button" onClick={() => setCounterNew(counter + 1)}>
        updateCounter
      </button>
      <div> Hello World Dashboard {counter} </div>
      <div>
        <Route exact path="/" component={() => <InputComponent />} />
        <Route
          exact
          path="/:username"
          component={() => <ListRepositorys repositoryList={repositoryList} />}
        />
        <Route exact path="/:username/:repository" component={() => <ViewRepo />} />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
