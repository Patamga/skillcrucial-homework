import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Head from './head'

const ListRepositorys = () => {
  const { userName } = useParams()
  const [repositoryList, setRepositoryList] = useState([])
  useEffect(() => {
    // eslint-disable-next-line
    console.log('Entered: ', userName)
    if (typeof userName !== 'undefined') {
      axios.get(`https://api.github.com/users/${userName}/repos`).then(({ data }) => {
        setRepositoryList(data)
      })
    }
  }, [userName])

  return (
    <div>
      <Head title="Hello" />
      <span>Repositories for {userName}</span>
      {repositoryList.map((repo) => {
        return <div>{repo.name}</div>
      })}
    </div>
  )
}

ListRepositorys.propTypes = {}

export default React.memo(ListRepositorys)
