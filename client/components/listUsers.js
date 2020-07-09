import React from 'react'
import { useSelector } from 'react-redux'


const Home = () => {
  const usersList = useSelector((store) => store.channel.users)
  const currentUser = useSelector((store) => store.auth.user)
  return (
    <div>
      {usersList.map((item) => {
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
    // <div>
    //   {usersList.map((i) => {
    //     return <div key={i._id}> {i.username}</div>
    //   })}
    // </div>
  )
}

Home.propTypes = {}

export default Home
