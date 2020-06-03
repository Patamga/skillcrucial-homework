import React from 'react'

import { useParams } from 'react-router-dom'
import Header from './headers'
import Input from './input'

const TaskList = (props) => {
  const { timespan } = useParams()

  const setRefresh  = props.refresh
  const refreshState = props.state

  let value = props.tasks
  if (typeof timespan !== 'undefined') {
    value = props.time
  }
  // const { userName } = useParams()
  return (
    <div>
      <Header />
      <Input refresh={setRefresh} state={refreshState} />
      <div className="md:flex m-4">
        <div className="mt-4 md:mt-0 md:ml-6">
          {value.map((task) => {
            console.log(task)
            return (
              <div key={task.title} className="mt-2 text-gray-600 mx-3 ">
                <ul className="ist-none">
                  <li>
                    {task.title}
                    {/* <Link to={`/${userName}/${repo.title}`}>{repo.title}</Link> */}
                  </li>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

TaskList.propTypes = {}

export default React.memo(TaskList)
