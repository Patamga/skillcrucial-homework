import React from 'react'

import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

const NotFound = () => {
  const dispatch = useDispatch()
  return (
    <div className="container main-wrapper aligner">
      <div className="aligner-item text-center ">
        <h1 className="display-1 text-6xl">404</h1>
        <p className="lead text-4xl text-teal-600 mb-5">ТУТ РЫБЫ НЕТ</p>
        {/* <p className="lead text-gray-800 mb-5">Page Not Found</p>
        <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p> */}
        <br />
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          type="button"
          tabIndex="0"
          onClick={() => {
            dispatch(push('/'))
          }}
        >
          {' '}
          ЗАТО ЕСТЬ РАКИ
        </button>
      </div>
    </div>
  )
}

NotFound.propTypes = {}

NotFound.defaultProps = {}

export default NotFound
