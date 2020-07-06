import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initUserChannels } from '../redux/reducers/chan'
// import { useSelector } from 'react-redux'
import { history } from '../redux'

const ChenalList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(initUserChannels())
  }, [])


  const channels = useSelector((store) => store.chan)
  const e = initUserChannels()
  console.log('fffff', e)
  // const channels = useSelector((store) => store.channelList)
  console.log("111111111",channels)

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
