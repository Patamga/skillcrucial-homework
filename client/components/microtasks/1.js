import React from 'react'
import { Link } from 'react-router-dom'


const Dummy = () => {
  return (
    <div className="flex-container ">
      <div className="task-1 red">
        <Link className="link" to="/">
          back
        </Link>
      </div>
      <div className="task-1 green "> </div>
      <div className="task-1 blue"> </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
