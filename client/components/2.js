import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div className=" flex flex-col  h-screen w-screen">
      <div className=" flex-grow bg-red-500 ">
        <Link className="pl-2 text-blue-700" to="/">
          back
        </Link>
      </div>
      <div className=" flex-grow bg-green-500 "> </div>
      <div className=" flex-grow bg-yellow-500 "> </div>
      <div className=" flex-grow bg-blue-500 "> </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
