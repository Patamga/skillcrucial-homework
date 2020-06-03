import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './headers'
import Input from './input'
import List from './List'

const TodoList = () => {
  const { category, timespan } = useParams()

  const [taskList, setTaskList] = useState([])
  const [timespanList, setTimespanList] = useState([])
  const [refresh, setRefresh] = useState(false)

  const getRefresh = () => {
    return refresh
  }

  useEffect(() => {
    if (typeof category !== 'undefined') {
      axios.get(`/api/v1/tasks/${category}`).then(({ data }) => {
        setTaskList(data)
      })
    }
  }, [category, refresh])

  useEffect(() => {
    if (typeof timespan !== 'undefined') {
      axios.get(`/api/v1/tasks/${category}/${timespan}`).then(({ data }) => {
        setTimespanList(data)
      })
    }
  }, [timespan])

  // const createTask = (task) => {
  //   if (typeof category !== 'undefined') {
  //     axios.post(`/api/v1/tasks/${category}`, { title: task })
  //   }
  //   setTaskBody('')
  //   setTimeout(1000)
  //   setRefresh(!refreshState())
  // }

  return (
    <div>
      <Header time={timespanList} />
      <Input state={getRefresh} refresh={setRefresh} />
      <List tasks={taskList} time={timespanList} />
      <Input state={getRefresh} refresh={setRefresh} />
    </div>
  )
}

TodoList.propTypes = {}

export default React.memo(TodoList)
