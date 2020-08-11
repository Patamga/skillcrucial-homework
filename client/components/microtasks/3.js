import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div className="flex-container column">
      <div className="task-3 red">
        <div>
          <Link className="link" to="/">
            back
          </Link>
          1
        </div>
        <div> 2</div>
        <div> 3</div>
        <div> 4</div>
      </div>
      <div className="task-3 green ">
        <div> 5</div>
        <div> 6</div>
        <div> 7</div>
        <div> 8</div>
      </div>
      <div className="task-3 yellow ">
        <div> 9</div>
        <div> 10</div>
        <div> 11</div>
        <div> 12</div>
      </div>
      <div className="task-3 blue ">
        <div> 13</div>
        <div> 14</div>
        <div> 15</div>
        <div> 16</div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
