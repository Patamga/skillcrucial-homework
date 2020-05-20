import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import axios from 'axios'

const Header = () => {
  const { userName, repository } = useParams()

  return (
    <div>
      <div>
        <div className="flex h-8 items-center border-b border-b-2 border-teal-500 py-2 ">
          <span className="h-4"> </span>
          {userName && (
            <span className="px-4">
              GitHub user:
              <span className="text-teal-500"> {userName} </span>
            </span>
          )}
          {repository && (
            <span className="px-4">
              Redme for
              <span className="text-teal-500"> {repository} </span>
            </span>
          )}
          {repository && (
            <span className="px-4">
              <Link to={`/${userName}`} className="right-0 text-blue-500">
                BACK
              </Link>
            </span>
          )}
          {userName && (
            <span className="px-4">
              <Link to="/" className="right-0 text-blue-500">
                SEAH NEW
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
Header.propTypes = {}

export default React.memo(Header)
