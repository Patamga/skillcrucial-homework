import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div className="flex-container column">
      <div className="task-5 red">
        <div className="col1">
          <Link className="link" to="/">
            back
          </Link>
          1
        </div>
        <div className="col2"> 2</div>
      </div>
      <div className="task-5 green">
        <div>1</div>
        <div> 2</div>
        <div> 3</div>
      </div>
      <div className="task-5 yellow">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
