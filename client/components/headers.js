import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { userName, repository } = useParams()
  // const [toggled, toggle] = useState(false)

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-base tracking-tight">W12 </span>
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="30"
          viewBox="0 0 54 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8  4.05z" />
        </svg>
        <span className="font-semibold text-base tracking-tight">GitHub Searh</span>
      </div>
      <div className="block lg:hidden">
        {/* <button
          type="button"
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          // onClick={() => toggle(!toggled)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button> */}
      </div>
      {/* {toggled && ( */}
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {userName && (
            <span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">
              User:
              <span className="text-sm text-white mx-2">{userName}</span>
            </span>
          )}
          {repository && (
            <span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">
              Repository:
              <span id="repository-name" className="text-sm text-white mx-2">
                {repository}/README.md
              </span>
            </span>
          )}
        </div>
        <div>
          {repository && (
            <span className="px-4">
              <Link
                id="go-repository-list"
                to={`/${userName}`}
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Back
              </Link>
            </span>
          )}
          {userName && (
            <span className="px-4">
              <Link
                id="go-back"
                to="/"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                New search
              </Link>
            </span>
          )}
        </div>
      </div>
      {/* )} */}
    </nav>
  )
}
Header.propTypes = {}

export default React.memo(Header)
