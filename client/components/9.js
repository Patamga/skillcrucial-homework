import React from 'react'

const Dummy = () => {
  return (
    <div className="flex-container center">
      <div className="task-9">
        <div className="row1 ">
          <div>&nbsp;</div>
        </div>
        <div className="row2">
          <div>&nbsp;</div>
        </div>
        <div className="row3">
          <div>&nbsp;</div>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
