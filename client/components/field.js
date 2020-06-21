import React, {useState} from 'react'
import { useSelector } from 'react-redux'

const Field = () => {
  const data = useSelector((store) => store.game)
  const [RandomNumber, setRandomNumber] = useState()

  const cellColor = {
    yellow: 'w-12 h-12 bg-yellow-400 m-1 m-1',
    gray: 'w-12 h-12 bg-gray-400 m-1 m-1',
    green: 'w-12 h-12 bg-green-400 m-1 m-1',
    red: 'w-12 h-12 bg-red-400 m-1 m-1'
  }

  const fieldSize = (size) => {
    const arr = new Array(size).fill(1).map((it, index) => {
      return index + 1
    })
    return arr
  }
  const field = fieldSize(data.lenght)
  const selected = []
  // useEffect(() => {
    setInterval(() => {
      const number = field[Math.floor(Math.random() * field.length)]
      setRandomNumber(number)
      console.log(number)


      // clearInterval(intervalId)
    }, 1000)

  // }, [])

  const color = (idSquare) => {
    if (idSquare === RandomNumber) {
      return cellColor.yellow
    }
    return cellColor.gray
  }
  // useEffect(() => {
  //   if (numberActive === id) {
  //     setColor(cellColor.yellow)
  //     // setTimeout(paint, 5000)
  //   }
  // }, [numberActive])

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className={`inline-grid grid-cols-${data.column} gap-1`}>
        {field.map((item, index) => {
          return (
            <div
              id={item}
              key={index}
              className={color(item)}
              // {/* onChange={onChange} */}
            >
              {" "}
            </div>
          )
        })}
      </div>
    </div>
  )
}

Field.propTypes = {}

export default Field
