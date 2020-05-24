import React, { useState, useEffect } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import base64 from 'base-64'
import utf8 from 'utf8'
import { history } from '../redux'

import InputComponent from './inputComponent'
import ListRepositorys from './listRepositorys'
import ViewRepo from './viewRepos'
import NotFound from './404'

import Head from './head'
import Header from './headers'

const Home = () => {
  const { userName, repository } = useParams()

  const [repositoryList, setRepositoryList] = useState([])
  const [repoDescription, setRepoDescription] = useState('')

  useEffect(() => {
    if (typeof userName !== 'undefined') {
      axios
        .get(`http://localhost:8090/api/v1/tasks/${userName}`)
        .then(({ data }) => {
          setRepositoryList(data)
        })
        .catch(() => {
          history.push(`/${404}`)
        })
    }
  }, [userName])

  useEffect(() => {
    if (typeof repository !== 'undefined' && typeof userName !== 'undefined') {
      axios
        .get(`https://api.github.com/repos/${userName}/${repository}/contents/README.md`)
        .then(({ data }) => {
          setRepoDescription(utf8.decode(base64.decode(data.content)))
        })
        .catch(() => {
          history.push(`/${userName}/${404}`)
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
        <Route exact path="/404" component={() => <NotFound repos={repositoryList} />} />
        <Route exact path="/:userName/404" component={() => <NotFound repos={repositoryList} />} />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
