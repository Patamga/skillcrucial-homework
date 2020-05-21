import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import axios from 'axios'

const Header = () => {
  const { userName, repository } = useParams()

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-teal-200 mr-6">
        <span className="font-semibold text-xl tracking-tight">Week 12 </span>
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="30"
          viewBox="0 0 54 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8  4.05z" />
        </svg>
        <span className="font-semibold text-base tracking-tight">GitHub Searh repositiry </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="flex items-center flex-shrink-0 text-teal-200 mr-6 lg:flex-grow">
          {userName && (
            <span className="font-semibold text-xs tracking-tight">User Name:
              <span className="block mt-4 lg:inline-block lg:mt-0 text-sm text-white mx-2">{userName}</span>
            </span>
          )}
          {repository && (
            <span className="font-semibold text-xs tracking-tight">Repository:
              <span className="block mt-4 lg:inline-block lg:mt-0 text-sm text-white mx-2">{repository}</span>
            </span>
          )}
        </div>
        <div>
          {repository && (
            <span className="px-4">
              <Link
                to={`/${userName}`}
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                Back
              </Link>
            </span>
          )}
          {userName && (
            <span className="px-4">
              <Link
                to="/"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                New search
              </Link>
            </span>
          )}
        </div>
      </div>
    </nav>
  )
}
Header.propTypes = {}

export default React.memo(Header)
