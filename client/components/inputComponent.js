import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Head from './head'

const InputComponent = () => {
  const { username } = useParams()
  // const [username, setUsername] = useState('')

  return (
    <div>
      <Head title="Hello" />
      <input type="text" />
      <button type="button">
        <Link to={`/${username}`}>Go</Link>
      </button>
    </div>
  )
}

InputComponent.propTypes = {}

export default React.memo(InputComponent)
