import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateChannelNameField, createChannel } from '../redux/reducers/addChannel'

const ChannelForm = (props) => {
  const dispatch = useDispatch()
  const channelName = useSelector((s) => s.channels)
  const id = props.userId
  console.log('id', id)

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center ">
      <div className="w-full  max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              {/* Chanel Name */}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Channel Name"
              value={channelName}
              onChange={(e) => {
                dispatch(updateChannelNameField(e.target.value))
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => dispatch(createChannel(id))}
            >
              CREATE CHANNEL
            </button>
            <Link
              to="/private/allchannels"
              className="inline-block align-baseline font-bold text-sm text-teal-600 hover:text-teal-700"
            >
               CHOOSE
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChannelForm
