import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import Head from './head'

const ListRepositorys = (props) => {
  const { userName } = useParams()
  return (
    <div>
      {props.repos.map((repo) => {
        return (
          <div key={repo.name}>
            <Link to={`/${userName}/${repo.name}`}>{repo.name}</Link>
          </div>
        )
      })}
    </div>
  )
}

ListRepositorys.propTypes = {}

export default React.memo(ListRepositorys)
