import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initUsers } from '../redux/reducers/users'
// import { useSelector } from 'react-redux'
// import { history } from '../redux'

const UsersList = () => {
  const currentUser = useSelector((store) => store.auth.user)
  const users = useSelector((store) => store.users)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initUsers())
  }, [])



  // const channels = useSelector((store) => store.channelList)

  return (
    <div>
      {users.map((item) => {
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
