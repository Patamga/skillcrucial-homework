import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Input = (props) => {
  const { category } = useParams()
  const [taskBody, setTaskBody] = useState('')

  const setRefresh = props.refresh
  const refreshState = props.state

  const re = /^[ -~а-яА-Я]*$/
  const onChange = (e) => {
    if (re.test(e.target.value)) {
      const newValue = e.target.value
      setTaskBody(newValue)
    }
  }

  const createTask = (task) => {
    if (typeof category !== 'undefined') {
      axios.post(`/api/v1/tasks/${category}`, { title: task }).then(() => {
        setRefresh(!refreshState())
      })
    }
    setTaskBody('')
  }

  return (
    <div className="w-full my-5">
      <div className="flex flex-wrap mb-3">
        <div className="flex -mx-1 w-full px-3 md:mb-0">
          <input
            type="text"
            value={taskBody}
            onChange={onChange}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4   focus:outline-none focus:bg-white mx-3"
            placeholder="add task"
          />
          <button
            type="button"
            onClick={() => createTask(taskBody)}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-4  border border-blue-500 hover:border-transparent rounded"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  )
}

Input.propTypes = {}

export default React.memo(Input)
