import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Square from './square'
import { newNumber } from '../redux/reducers/number'

const Field = () => {
  const data = useSelector((store) => store.game)
  const dispatch = useDispatch()

  const arrfieldSize = (size) => {
    const arr = new Array(size).fill(1).map((it, index) => {
      return index + 1
    })
    return arr
  }
  const arrField = arrfieldSize(data.lenght)

  useEffect(() => {
    setInterval(() => {
     const number = arrField[Math.floor(Math.random() * arrField.length)]
      dispatch(newNumber(number))
      // clearInterval(intervalId)
    }, 2000)

  }, [])

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className={`inline-grid grid-cols-${data.column} gap-1`}>
        {arrField.map((item, index) => {
          return <Square item={item} key={index} />
        })}
      </div>
    </div>
  )
}

Field.propTypes = {}

export default Field
