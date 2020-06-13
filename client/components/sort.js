import React from 'react'
import { useDispatch } from 'react-redux'
import { sortByName, sortByPrice } from '../redux/reducers/products'

const Sort = () => {
  const dispatch = useDispatch()
  return (
    <div className="flex justify-center ">
      <div className="flex justify-center w-auto inline-block object-top text-gray-500 mr-6 ">
        <button
          className="
            border-l border-b border-r border-gray-500 rounded-b-lg px-4
            hover:bg-gray-300
            active:bg-gray-500
            focus:outline-none focus:shadow-inner
            focus:border-gray-800
            shadow-sm"
          id="sort-price"
          type="button"
          onClick={() => dispatch(sortByPrice())}
        >
          sort by <span className="text-gray-800 px-1">price</span> &#8645;
        </button>
        <span className="flex mx-5">|</span>
        <button
          id="sort-name"
          type="button"
          className="
            border-l border-b border-r border-gray-500 rounded-b-lg px-4
            hover:bg-gray-300
            active:bg-gray-500
            focus:outline-none focus:shadow-inner
            focus:border-gray-800
            shadow-sm"
          onClick={() => dispatch(sortByName())}
        >
          sort by <span className="text-gray-800 px-1"> A - Z </span> &#8645;
        </button>
      </div>
    </div>
  )
}

Sort.propTypes = {}

export default React.memo(Sort)
