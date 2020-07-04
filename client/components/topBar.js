import React from 'react'

// import wave from '../assets/images/wave.jpg'

const TopBar = () => {
  return (
    <div className="border-b  border-gray-400 flex px-6 py-2 items-center bg-gray-200">
      <div className="flex flex-col">
        <h3 className="text-gray-900 text-md mb-1 font-extrabold">#general</h3>
        <div className="text-gray-600 font-thin text-sm">
          Chit-chattin about ugly HTML and mixing of concerns.
        </div>
      </div>
      <div className="ml-auto hidden md:block">
        <input
          type="search"
          placeholder="Search"
          className="border border-gray-600 rounded-lg p-2 bg-white"
        />
      </div>
    </div>
  )
}

TopBar.propTypes = {}

export default TopBar
