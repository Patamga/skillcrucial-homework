import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div className=" flex-container column">
      <div className="task-2 red">
        <Link className="link" to="/">
          back
        </Link>
      </div>
      <div className="task-2 green "> </div>
      <div className="task-2 yellow"> </div>
      <div className="task-2 blue"> </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
