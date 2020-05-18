import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { history } from '../redux'
import Head from './head'

const InputComponent = () => {
  const [user, setUser] = useState('')
  const onChange = (e) => {
    const newValue = e.target.value
    setUser(newValue)
    // props.onChange(newValue)
  }

  return (
    <div>
      <Head title="Hello" />
      <input type="text" value={user} onChange={onChange} />
      <Link to={`/${user}`}>Go</Link>
      {/* <button id="search-button" type="button" onClick={() => history.push(`/${username}`)}>
        <span>Search</span>
      </button> */}
    </div>
  )
}

InputComponent.propTypes = {}

export default React.memo(InputComponent)
