import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div className="flex-container center">
      <div className="task-8">
        <Link className="link" to="/">
          back
        </Link>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
