import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { history } from '../redux'
import Head from './head'

const InputComponent = () => {
  const [username, setUsername] = useState('')
  const onChange = (e) => {
    const newValue = e.target.value
    setUsername(newValue)
    // props.onChange(newValue)
  }

  return (
    <div>
      <Head title="Hello" />
      <input type="text" value={username} onChange={onChange} />
      <button id="search-button" type="button" onClick={() => history.push(`/${username}`)}>
        <span>Search</span>
      </button>
    </div>
  )
}

InputComponent.propTypes = {}

export default React.memo(InputComponent)
