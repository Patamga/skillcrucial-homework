import React from 'react'
import { useParams } from 'react-router-dom'
import Delete from './delete'
import Edit from './edit'
import InProgress from './inprogress'
// import Blocked from './blocked'
import Done from './done'
import CurrentStatus from './currentStatus'

const List = (props) => {
  const { timespan } = useParams()
  let value = props.tasks
  if (typeof timespan !== 'undefined') {
    value = props.time
  }
  return (
    <div className="md:flex m-4 ">
      <div className="mt-4 md:mt-0 md:ml-6 w-full flex-col">
        {value.map((task) => {
          return (
            <div key={task.id} className=" mt-2 text-gray-600 flex justify-between ">
              <div className="flex  items-center">
                <Delete />
                <Edit />
                <CurrentStatus status={task.status} />
              </div>
              <div className="justify-start w-full ">
                <span>{task.title}</span>
              </div>
              <div className="flex items-center text-sm leading-5 ">
                <InProgress />
                {/* <Blocked /> */}
                <Done />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

List.propTypes = {}

export default React.memo(List)
