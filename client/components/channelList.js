import React from 'react'
// import { useSelector } from 'react-redux'
// import { history } from '../redux'

const ChanelList = () => {
  // const channels = useSelector((store) => store.channels)

  return (
    <div>
      {/* {channels.map((item) => {
        const channel = item.name
        return (
          <div key={item.name} className="px-4 mb-2 text-white font-semi-bold ">
            <li className="list-none">
              <button type="button" onClick={() => history.push(`/${channel}`)}>
                # {channel}
              </button>
            </li>
          </div>
        )
      })} */}
    </div>
  )
}

ChanelList.propTypes = {}

export default ChanelList
