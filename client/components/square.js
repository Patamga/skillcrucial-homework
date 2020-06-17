import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import {updateStilesquare} from '../redux/reducers/game'
// import { useEffect } from 'react'

const Home = (props) => {
  // const dispatch = useDispatch()
  const numberActive = useSelector((store) => store.number.num)
  const [color, setColor] = useState('')

  // console.log('3333', numberActive)
  const stileBg = {
    yellow: 'w-12 h-12 bg-yellow-400 m-1 m-1',
    gray: 'w-12 h-12 bg-gray-400 m-1 m-1',
    green: 'w-12 h-12 bg-green-400 m-1 m-1',
    red: 'w-12 h-12 bg-red-400 m-1 m-1'
  }

  useEffect(() => {

    if (numberActive === props.item) {
      setColor(stileBg.yellow)
    } else {
      setColor(stileBg.gray)
    }
  }, [numberActive])
  console.log( props.item, numberActive)

  return (
    <div
      id={props.item}
      key={props.index}
      className={color}
      // onChange={(e) => {
      //   dispatch(updateStilesquare(e.target.className))
      // }}
    >
      {' '}
    </div>
  )
}

Home.propTypes = {}

export default Home
