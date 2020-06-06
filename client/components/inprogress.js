import React from 'react'
import Working from './img/working.png'

const InProgress = () => {
  return (
    <div className="h-10 w-10">
      <button
        type="button"
        className="h-10 w-10 mr-0 bg-white hover:bg-gray-200 text-gray-800 font-semibold px-1 border border-gray-400 rounded shadow"
      >
        <img src={Working} alt="in progress" />
      </button>
    </div>
  )
}

InProgress.propTypes = {}

export default React.memo(InProgress)
