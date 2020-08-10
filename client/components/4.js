import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div className=" flex flex-row  h-screen w-screen">
      <div className="w-1/4 flex flex-col bg-red-500 items-center">
        <div className="flex flex-grow items-center">
          <Link className="p-2 text-blue-700" to="/">
            back
          </Link>
          1
        </div>
        <div className="flex flex-grow items-center "> 2</div>
        <div className="flex flex-grow items-center"> 3</div>
        <div className=" flex flex-grow items-center"> 4</div>
      </div>
      <div className="w-1/4  flex  flex-col i jus bg-green-500 items-center">
        <div className=" flex flex-grow items-center "> 5</div>
        <div className=" flex flex-grow items-center "> 6</div>
        <div className=" flex flex-grow items-center "> 7</div>
        <div className=" flex flex-grow items-center "> 8</div>
      </div>
      <div className="w-1/4 flex flex-col i jus bg-yellow-500 items-center">
        <div className=" flex flex-grow items-center "> 9</div>
        <div className=" flex flex-grow items-center "> 10</div>
        <div className=" flex flex-grow items-center "> 11</div>
        <div className=" flex flex-grow items-center "> 12</div>
      </div>
      <div className="w-1/4 flex flex-col i jus bg-blue-500 items-center">
        <div className=" flex flex-grow items-center "> 13</div>
        <div className=" flex flex-grow items-center "> 14</div>
        <div className=" flex flex-grow items-center "> 15</div>
        <div className=" flex flex-grow items-center "> 16</div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
