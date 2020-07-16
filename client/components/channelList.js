import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addChannelsList } from '../redux/reducers/user'
import { actualChannel } from '../redux/reducers/channel'

const ChannelList = () => {
  const currentUser = useSelector((store) => store.authentication.user)
  const id = currentUser._id
  const userStor = useSelector((store) => store.user)
  const channelStor = useSelector((store) => store.channel)
  const list = userStor.channelList
  const current = channelStor.channel.channelName
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addChannelsList(id))
  }, [id])

  return (
    <div>
      {list.map((item) => {
        const channel = item.channelName
        if (channel === current) {
          return (
            <div
              key={item._id}
              className="bg-teal-600 px-4 pb-1 pt-1  mb-2 text-white font-semi-bold "
            >
              <Link to={`/private/${channel}`}>
                <span className="pr-1 text-gray-400">#</span>
                {channel}
              </Link>
            </div>
          )
        }
        return (
          <div key={item.channelName} className="px-4 mb-2 text-white font-semi-bold ">
            <Link to={`/private/${channel}`} onClick={() => dispatch(actualChannel(channel))}>
              <span className="pr-1 text-gray-400">#</span>
              {channel}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

ChannelList.propTypes = {}

export default ChannelList
