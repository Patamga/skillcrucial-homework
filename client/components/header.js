import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { userName, repository } = useParams()
  // const [toggled, toggle] = useState(false)

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-base tracking-tight px-1">W12 </span>
        <span className="font-semibold text-base tracking-tight px-1">&#9752; </span>
        <span className="px-2">
          <Link id="brand-name" to="/" className="font-semibold text-2xl tracking-tight">
            SHOP
          </Link>
        </span>
      </div>
      <div className=" inline-block relative w-48 text-white">
        sort by
        <select className="block appearance-none bg-teal-600 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline">
          <option>lowest first</option>
          <option>highest first </option>
          <option>A - Z </option>
          <option>Z - A </option>
        </select>
      </div>
      <div className="inline-block relative w-32 text-white">
        currency
        <select className="block appearance-none bg-teal-600 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline">
          <option>USD &#36;</option>
          <option>EUR &#8364;</option>
          <option>CAD C&#36; </option>
        </select>
      </div>
      <div className=" items-center flex-shrink-0 text-white mr-6">
        <span className="px-2">
          <Link id="#order-count" to="/basket" className="font-semibold text-m tracking-tight">
            Your cart
          </Link>
        </span>
        <div>Quantity </div>
        <div>Total amount</div>
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