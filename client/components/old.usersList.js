// import React from 'react'
// import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { usersInChannel } from '../redux/reducers/channel'
// import { useSelector } from 'react-redux'
// import { history } from '../redux'

const UsersList = () => {
  const[list, setList] = useState()
  const currentChannel = useSelector((store) => store.channel.currentChannel)
  console.log('currentChannel', currentChannel)
  const channelUrl = useParams()
  const currentUser = useSelector((store) => store.auth.user)
  const usersList = useSelector((store) => store.channel.users)
  console.log('users List', usersList)

  // const dispatch = useDispatch()

    useEffect(() => {
      setList(usersList)
    }, [channelUrl, currentChannel])


  // const channels = useSelector((store) => store.channelList)

  return (
    <div>
      { list.map((item) => {
        const user = item.username
        if (user === currentUser.username) {
          return (
            <div key={item._id} className="flex items-center mb-3 px-4">
              {/* <span className="bg-green-500 rounded-full block w-2 h-2 mr-2"> </span> */}
              <span className="text-blue-100">
                {user}
                <i className="text-gray-500 text-sm"> (me)</i>
              </span>
            </div>
          )
        }
        return (
          <div key={item._id} className="flex items-center mb-3 px-4">
            {/* <span className="bg-green-500 rounded-full block w-2 h-2 mr-2"> </span> */}
            <span className="text-blue-100">{user}</span>
          </div>
        )
      })}
    </div>
  )
}

UsersList.propTypes = {}

export default UsersList
