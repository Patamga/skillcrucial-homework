import React, { useState, useEffect } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import base64 from 'base-64'
import utf8 from 'utf8'

import InputComponent from './inputComponent'
import ListRepositorys from './listRepositorys'
import ViewRepo from './viewRepos'

import Head from './head'
import Header from './header'

const Home = () => {
  const { userName, repository } = useParams()

  const [repositoryList, setRepositoryList] = useState([])
  useEffect(() => {
    if (typeof userName !== 'undefined') {
      axios.get(`https://api.github.com/users/${userName}/repos`).then(({ data }) => {
        setRepositoryList(data)
      })
    }
  }, [userName])

  const [repoDescription, setRepoDescription] = useState('')
  useEffect(() => {
    if (typeof repository !== 'undefined' && typeof userName !== 'undefined') {
      axios
        .get(`https://api.github.com/repos/${userName}/${repository}/contents/README.md`)
        .then(({ data }) => {
          setRepoDescription(utf8.decode(base64.decode(data.content)))
        })
    }
  }, [repository])

  return (
    <div>
      <Head title="Hello" />
      <div>
        <Header />
      </div>

      <div>
        {/* <Switch> */}
        <Route exact path="/" component={() => <InputComponent />} />
        <Route
          exact
          path="/:userName"
          component={() => <ListRepositorys repos={repositoryList} />}
        />
        <Route
          exact
          path="/:userName/:repository"
          component={() => <ViewRepo redme={repoDescription} />}
        />
        {/* </Switch> */}
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
