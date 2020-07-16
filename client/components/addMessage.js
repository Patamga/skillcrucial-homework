import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateAddMessageField, seveMessage } from '../redux/reducers/channel'

const AddMessage = () => {
  const dispatch = useDispatch()
  const channel = useSelector((s) => s.channel.channel)
  const message = useSelector((s) => s.channel.channel.admessage)
  const currentUser = useSelector((store) => store.authentication.user)
  console.log( '222222222222', channel, currentUser)

  return (
    <div className="flex m-6 rounded-lg border-2 border-gray-600 overflow-hidden bg-gray-100">
      {/* <span className="text-3xl text-gray-600 px-3 border-r-2 border-gray-500">+</span>

      <input type="text" className="w-full px-4" placeholder="Message to #general" /> */}
      <button
        className="text-3xl text-gray-600 px-3 border-r-2 border-gray-500"
        type="button"
        onClick={() => dispatch(seveMessage(currentUser._id))}
      >
        +
      </button>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
        {' '}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder={`Message to #${channel.channelName}`}
        value={message}
        onChange={(e) => {
          dispatch(updateAddMessageField(e.target.value))
        }}
      />
    </div>
  )
}

AddMessage.propTypes = {}

export default AddMessage
