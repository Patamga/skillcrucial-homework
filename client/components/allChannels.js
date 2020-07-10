import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { initUserChannels } from '../redux/reducers/channelList'
import { currentChannels } from '../redux/reducers/channel'
// import { history } from '../redux'

const AllChannels = (props) => {
  const channels = useSelector((store) => store.channelList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initUserChannels(props.userId))
  }, [props.userId])

  return (
    <div>
      ALL CHANNENLS
      {channels.map((item) => {
        const channel = item.channelName
        console.log(item)
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

AllChannels.propTypes = {}

export default AllChannels
