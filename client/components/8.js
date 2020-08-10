import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <div className="w-64 h-64 bg-gray-900 flex items-center justify-center">
          <Link className="p-2 text-blue-700" to="/">
            back
          </Link>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
