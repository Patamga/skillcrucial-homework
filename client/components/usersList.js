import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initUsers } from '../redux/reducers/users'
// import { useSelector } from 'react-redux'
import { history } from '../redux'

const UsersList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initUsers())
  }, [])

  const users = useSelector((store) => store.users)

  // const channels = useSelector((store) => store.channelList)

  return (
    <div>
      {users.map((item) => {
        const user = item.username
        return (
          <div key={item.usernsme} className="px-4 mb-2 text-white font-semi-bold ">
            <li className="list-none">
              <button type="button" onClick={() => history.push(`/private/${user}`)}>
                <span className="pr-1 text-gray-400">#</span>
                {user}
              </button>
            </li>
          </div>
        )
      })}
    </div>
  )
}

UsersList.propTypes = {}

export default UsersList
