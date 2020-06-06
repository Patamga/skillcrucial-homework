import React from 'react'
import Sleeping from './img/sleeping.png'

const Blocked = () => {
  return (
    <div>
      <button
        type="button"
        className=" w-10 bg-white hover:bg-gray-200 text-gray-800 font-semibold py-1 px-1 mr-2 ml-2 border border-gray-400 rounded shadow"
      >
        <img src={Sleeping} alt="blocked" />
      </button>
    </div>
  )
}

Blocked.propTypes = {}

export default React.memo(Blocked)
