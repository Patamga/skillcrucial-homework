import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { initUserChannels } from '../redux/reducers/channelList'
import { currentChannels } from '../redux/reducers/channel'
// import { history } from '../redux'

const ChannelList = (props) => {
  const channels = useSelector((store) => store.channelList)
  const currentChannel = useSelector((store) => store.channel.currentChannel)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initUserChannels(props.userId))
  }, [props.userId])
  // useEffect(() => {
  //   dispatch(currentChannels(channel))
  // }, [ channelUrl])

  return (
    <div>
      {channels.map((item) => {
          const channel = item.channelName
            if (channel === currentChannel.channelName) {
            return (
              <div
                key={item.channelName}
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
              <div key={item.channelName} className="px-4 mb-2 pb-1 pt-1 text-white font-semi-bold ">
                <Link to={`/private/${channel}`} onClick={() => dispatch(currentChannels(channel))}>
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
