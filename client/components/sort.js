import React from 'react'

const Sort = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex justify-center w-auto inline-block object-top text-gray-500 mr-6 border-l border-b border-r border-pink-500 rounded-b-lg px-4">
        <button id="sort-price" type="button">
          sort by <span className="text-pink-400 px-1">price</span> &#8645;
        </button>
        <span className="flex mx-5">|</span>
        <button id="sort-name" type="button" className="flex items-center px-1">
          sort by <span className="text-pink-400 px-1"> A - Z </span> &#8645;
        </button>
      </div>
    </div>
  )
}

Sort.propTypes = {}

export default React.memo(Sort)
