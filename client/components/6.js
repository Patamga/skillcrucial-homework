import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div className="task-6">
      <div>
        <Link className="link" to="/">
          back
        </Link>
        1
      </div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
