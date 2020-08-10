import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div className=" flex flex-col  h-screen w-screen">
      <div className="flex flex-grow flex-row bg-red-500 items-center justify-center border-gray-900">
        <div className=" w-64 border border-gray-700 m-1 flex-grow text-center">
          <Link className="p-2 text-blue-700" to="/">
            back
          </Link>
          1
        </div>
        <div className=" w-full border border-gray-700 m-1 flex-grow text-center"> 2</div>


      </div>
      <div className=" flex flex-grow flex-row items-center justify-center bg-green-500 ">
        <div className="w-1/3 border border-gray-700 m-1 flex-grow text-center ">1</div>
        <div className="w-1/3 border border-gray-700 m-1 flex-grow text-center"> 2</div>
        <div className="w-1/3 border border-gray-700 m-1 flex-grow text-center"> 3</div>

      </div>
      <div className=" flex flex-grow flex-row items-center justify-center bg-yellow-500 ">
        <div className="w-1/3 border border-gray-700 m-1 flex-grow text-center ">1</div>
        <div className="w-1/3 border border-gray-700 m-1 flex-grow text-center">2</div>
        <div className="w-1/3 border border-gray-700 m-1 flex-grow text-center">3</div>

      </div>

    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
