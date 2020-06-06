import React from 'react'
import Successfully from './img/successfully.png'

const Done = () => {
  return (
    <div>
      <button
        type="button"
        className=" w-10 bg-white hover:bg-gray-200 text-gray-800 font-semibold py-1 px-1 mr-2 ml-2 border border-gray-400 rounded shadow"
      >
        <img src={Successfully} alt="done" />
      </button>
    </div>
  )
}

Done.propTypes = {}

export default React.memo(Done)
