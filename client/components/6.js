import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div className="flex flex-grow flex-wrap items-center justify-center border-gray-900">
      <div className="flex w-64 h-64 border border-gray-700 m-1 items-center justify-center">
        <Link className="p-2 text-blue-700" to="/">
          back
        </Link>
        1
      </div>
      <div className="flex w-64 h-64 border border-gray-700 m-1 items-center justify-center">2</div>
      <div className="flex w-64 h-64 border border-gray-700 m-1 items-center justify-center">3</div>
      <div className="flex w-64 h-64 border border-gray-700 m-1 items-center justify-center">4</div>
      <div className="flex w-64 h-64 border border-gray-700 m-1 items-center justify-center">5</div>
      <div className="flex w-64 h-64 border border-gray-700 m-1 items-center justify-center">6</div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
