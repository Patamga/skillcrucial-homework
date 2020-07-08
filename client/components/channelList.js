import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { initUserChannels } from '../redux/reducers/channelList'
import { history } from '../redux'

const ChenalList = (props) => {
  const channels = useSelector((store) => store.channelList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initUserChannels(props.userId))
  }, [props.userId])

  return (
    <div>
      {channels.map((item) => {
        const channel = item.channelName
        return (
          <div key={item.channelName} className="px-4 mb-2 text-white font-semi-bold ">
            <li className="list-none">
              <button type="button" onClick={() => history.push(`/private/${channel}`)}>
                <span className="pr-1 text-gray-400">#</span>
                {channel}
              </button>
            </li>
          </div>
        )
      })}
    </div>
  )
}

ChenalList.propTypes = {}

export default ChenalList
