import React from 'react'



const AddMessage = () => {
  return (
    <div className="flex m-6 rounded-lg border-2 border-gray-600 overflow-hidden bg-gray-100">
      <span className="text-3xl text-gray-600 px-3 border-r-2 border-gray-500">+</span>
      <input type="text" className="w-full px-4" placeholder="Message to #general" />
    </div>
  )
}

AddMessage.propTypes = {}

export default AddMessage
