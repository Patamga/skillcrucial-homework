import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { initUserChannels } from '../redux/reducers/channelList'
import { currentChannels } from '../redux/reducers/channel'
// import { history } from '../redux'

const ChenalList = (props) => {
  const channels = useSelector((store) => store.channelList)

  const channelUrl = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initUserChannels(props.userId))
  }, [props.userId, channelUrl, dispatch])

  return (
    <div>
      {channels.map((item) => {
        const channel = item.channelName
        if (channel === channelUrl[0]) {
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
          <div key={item.channelName} className="px-4 mb-2 text-white font-semi-bold ">
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

ChenalList.propTypes = {}

export default ChenalList
