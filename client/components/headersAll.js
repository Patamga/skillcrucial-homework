import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { category } = useParams()

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <Link to="/">w12 &#9842; TODO</Link>
        </span>
        {category && (
          <span className="ml-20">
            <span className="text-l text-white mx-2">&equiv; {category}</span>
          </span>
        )}
      </div>
    </nav>
  )
}
Header.propTypes = {}

export default React.memo(Header)
