import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import Head from './head'

const ListRepositorys = (props) => {
  const { userName } = useParams()
  return (
    <div>
      <div className="md:flex m-4">
        <div className="mt-4 md:mt-0 md:ml-6">
          {props.repos.map((repo) => {
            return (
              <div key={repo.name} className="mt-2 text-gray-600 list-disc">
                <ul className="list-disc">
                  <li>
                    <Link to={`/${userName}/${repo.name}`}>{repo.name}</Link>
                  </li>
                </ul>
              </div>
            )
          })}
          {/* <a href="#" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
          <p className="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p> */}
        </div>
      </div>
    </div>
  )
}

ListRepositorys.propTypes = {}

export default React.memo(ListRepositorys)
