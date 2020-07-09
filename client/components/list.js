import React from 'react'
import { useSelector } from 'react-redux'


const Home = () => {
  const usersList = useSelector((store) => store.channel.users)
  return (
    <div>
      {usersList.map((i) => {
        return <div key={i._id}> {i.username}</div>
      })}
    </div>
  )
}

Home.propTypes = {}

export default Home
