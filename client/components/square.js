import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import {updateStilesquare} from '../redux/reducers/game'
// import { useEffect } from 'react'

const Home = (props) => {
  // const dispatch = useDispatch()
  const numberActive = useSelector((store) => store.number.num)
  const [color, setColor] = useState('w-12 h-12 bg-gray-400 m-1 m-1')
//  const [clicked, setClicked] = useState(false)
  // console.log('3333', numberActive)
  const cellColor = {
    yellow: 'w-12 h-12 bg-yellow-400 m-1 m-1',
    gray: 'w-12 h-12 bg-gray-400 m-1 m-1',
    green: 'w-12 h-12 bg-green-400 m-1 m-1',
    red: 'w-12 h-12 bg-red-400 m-1 m-1'
  }

  // const paint = () => {
  //   if (color !== cellColor.green) {
  //     setColor(cellColor.red)
  //   }
  // }

//   const handleKeyDown = (ev) => {
//     // check keys if you want
//     if (ev.target.keyCode === 13) {
// //      setClicked(true)
//     }
//   }

  useEffect(() => {
    if (numberActive === props.item) {
      setColor(cellColor.yellow)
      // setTimeout(paint, 5000)
    }
  }, [numberActive])

  const onChange = (e) => {
    setColor(e.target.value)
  }

  // useEffect(() => {
  //   setColor(cellColor.green)
  // }, [clicked])

  console.log('Rendered item ', props.item, numberActive)

  return (
    <div
      id={props.item}
      key={props.index}
      className={color}
      onChange={onChange}
      // role="button"
      // onClick={() => {
        // console.log('Clicked on ', props.i)
//        setClicked(true)
      // }}
      // onKeyDown={() => {
      //   handleKeyDown()
      // }}
      // tabIndex={props.item}
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
