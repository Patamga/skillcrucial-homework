import React from 'react'
import { useParams } from 'react-router-dom'

const List = (props) => {
  const { timespan } = useParams()
  let value = props.tasks
  if (typeof timespan !== 'undefined') {
    value = props.time
  }
  return (
    <div>
      <div className="md:flex m-4">
        <div className="mt-4 md:mt-0 md:ml-6">
          {value.map((task) => {
            console.log(task)
            return (
              <div key={task.title} className="mt-2 text-gray-600 mx-3 ">
                <ul className="ist-none">
                  <li>{task.title}</li>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

List.propTypes = {}

export default React.memo(List)
