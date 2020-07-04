import React from 'react'

const ChatChannel = () => {
  return (
    <div className="flex items-start mb-4">
      <img src="https://i.imgur.com/8Km9tLL.jpg" className="w-10 h-10 rounded mr-3" alt=" " />
      <div className="flex flex-col">
        <div className="flex items-end">
          <span className="font-bold text-md mr-2 font-sans"> Olivia Dunham </span>
          <span className="text-gray-500 text-xs font-light">12:45</span>
        </div>
        <p className="font-light text-md text-gray-900 pt-1">
          How are we supposed to control the marquee space without an utility for it? I propose
          this:
        </p>
        <div className="bg-gray-200 border border-gray-400 font-mono rounded p-3 mt-2 whitespace-pre">
          {' '}
        </div>
      </div>
    </div>
  )
}

ChatChannel.propTypes = {}

export default React.memo(ChatChannel)
