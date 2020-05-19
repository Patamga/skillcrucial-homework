import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Head from './head'

const ListRepositorys = () => {
  const { userName } = useParams()
  const [repositoryList, setRepositoryList] = useState([])
  useEffect(() => {
    if (typeof userName !== 'undefined') {
      axios.get(`https://api.github.com/users/${userName}/repos`).then(({ data }) => {
        setRepositoryList(data)
      })
    }
  }, [userName])

  return (
    <div>
      <Head title="Hello" />
      <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl mb-3">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2 ">
          <span>Repositories for {userName}</span>
        </div>
      </div>
      <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-xl">
        {repositoryList.map((repo) => {
          return (
            <div key={repo.name}>
              <div style={{ width: '250px' }}>{repo.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

ListRepositorys.propTypes = {}

export default React.memo(ListRepositorys)
