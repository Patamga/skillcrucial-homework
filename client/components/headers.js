import React from 'react'

import { useParams, Link } from 'react-router-dom'
import { history } from '../redux'
// import { useParams } from 'react-router-dom'

const Header = () => {
  const { category } = useParams()
  // const [toggled, toggle] = useState(false)
  // const { timespan } = useParams()

  return (
    <ul className="flex border-b">
      <li className="-mb-px mr-1 w-1/4">
        <Link
          onClick={() => history.push(`/${category}`)}
          className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
        >
          All
        </Link>
      </li>
      <li className=" -mb-px mr-1 w-1/4">
        <Link
          onClick={() => history.push(`/${category}/day`)}
          className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
        >
          Day
        </Link>
      </li>
      <li className="mr-1 w-1/4">
        <Link
          onClick={() => history.push(`/${category}/week`)}
          className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
        >
          Week
        </Link>
      </li>
      <li className="mr-1 w-1/4">
        <Link
          onClick={() => history.push(`/${category}/month`)}
          className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
        >
          Month
        </Link>
      </li>
    </ul>
  )
}
Header.propTypes = {}

export default React.memo(Header)
