import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { history } from '../redux'

const InputComponent = () => {
  const re = /^[\da-zA-Z]+$/
  const [user, setUser] = useState('')
  const onChange = (e) => {
    if (re.test(e.target.value)) {
      const newValue = e.target.value
      setUser(newValue)
    }
  }

  return (
    <div>
      <div className="max-w-sm mx-auto flex-auto p-6 bg-white rounded-lg shadow-xl items-center">
        <div className="flex w-auto items-center border-b border-b-2 border-teal-500 py-2 ">
          <input
            id="input-field"
            type="text"
            value={user}
            onChange={onChange}
            className="flex appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none max-w-xs"
            aria-label="Full name"
            placeholder="GitHub user name"
          />
          <button
            id="search-button"
            type="button"
            onClick={() => history.push(`/${user}`)}
            className="flex bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            SHOW
          </button>
        </div>
      </div>
      {/* <Link to={`/${user}`}>Go</Link> */}
    </div>
  )
}

InputComponent.propTypes = {}

export default React.memo(InputComponent)
