import React from 'react'

const Sort = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex justify-center w-auto inline-block object-top text-pink-500 mr-6 border-l border-b border-r border-pink-500 rounded-b-lg px-4">
        <button id="sort-price" type="button">
          sort by price &#8645;
        </button>
        <span className="flex mx-5">|</span>
        <button id="sort-name" type="button" className="flex items-center px-1">
          sort by A - Z &#8645;
        </button>
      </div>
    </div>
  )
}

Sort.propTypes = {}

export default React.memo(Sort)
