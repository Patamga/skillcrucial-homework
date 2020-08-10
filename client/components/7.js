import React from 'react'
// import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-screen w-screen bg-red-400">1</div>
      <div className="flex h-screen w-screen bg-green-400">2</div>
      <div className="flex h-screen w-screen bg-blue-400">3</div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
