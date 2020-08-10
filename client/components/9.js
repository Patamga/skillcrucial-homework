import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <div className="w-64 h-64 border-gray-900 bg-yellow-500 flex flex-col">
        <div className="flex flex-grow  ">
          <div className="flex  w-1/3  bg-gray-600 items-center justify-center">
            <Link className=" text-white" to="/">
              back
            </Link>
          </div>
        </div>
        <div className="flex flex-grow justify-center">
          <div className="w-1/3  bg-gray-700">&nbsp;</div>
        </div>
        <div className="flex flex-grow justify-end ">
          <div className="w-1/3  bg-gray-800">&nbsp;</div>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
