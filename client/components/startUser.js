import React from 'react'

const StartUser = (props) => {
  return (
    <div>
      <div className="px-6 py-4 flex-1 overflow-scroll-x">Hello, {props.userName} ! </div>
    </div>
  )
}

StartUser.propTypes = {}

export default React.memo(StartUser)
