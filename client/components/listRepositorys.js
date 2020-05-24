import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ListRepositorys = (props) => {
  const { userName } = useParams()
  return (
    <div>
      <div className="md:flex m-4">
        <div className="mt-4 md:mt-0 md:ml-6">
          {props.repos.map((repo) => {
            return (
              <div key={repo.title} className="mt-2 text-gray-600 list-disc">
                <ul className="list-disc">
                  <li>
                    <Link to={`/${userName}/${repo.taskId}`}>{repo.title}</Link>
                  </li>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

ListRepositorys.propTypes = {}

export default React.memo(ListRepositorys)
