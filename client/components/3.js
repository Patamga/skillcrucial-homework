import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div className=" flex flex-col  h-screen w-screen">
      <div className="flex flex-grow flex-row bg-red-500 items-center justify-center">
        <div className=" w-1/4 flex-grow text-center ">
          <Link className="p-2 text-blue-700" to="/">
            back
          </Link>
          1
        </div>
        <div className=" w-1/4 flex-grow text-center"> 2</div>
        <div className=" w-1/4 flex-grow text-center"> 3</div>
        <div className=" w-1/4 flex-grow text-center"> 4</div>
      </div>
      <div className=" flex flex-grow flex-row items-center justify-center bg-green-500 ">
        <div className="w-1/4 flex-grow text-center "> 5</div>
        <div className="w-1/4 flex-grow text-center"> 6</div>
        <div className="w-1/4 flex-grow text-center"> 7</div>
        <div className="w-1/4 flex-grow text-center"> 8</div>
      </div>
      <div className=" flex flex-grow flex-row items-center justify-center bg-yellow-500 ">
        <div className="w-1/4 flex-grow text-center "> 9</div>
        <div className="w-1/4 flex-grow text-center"> 10</div>
        <div className="w-1/4 flex-grow text-center"> 11</div>
        <div className="w-1/4 flex-grow text-center"> 12</div>
      </div>
      <div className=" flex flex-grow flex-row items-center justify-center bg-blue-500 ">
        <div className="w-1/4 flex-grow text-center "> 13</div>
        <div className="w-1/4 flex-grow text-center"> 14</div>
        <div className="w-1/4 flex-grow text-center"> 15</div>
        <div className="w-1/4 flex-grow text-center"> 16</div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
