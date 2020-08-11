import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div className="container">
      <div className="task-7 red">
        1
        <Link className="link" to="/">
          back
        </Link>
      </div>
      <div className="task-7 green">2</div>
      <div className="task-7 blue">3</div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
