import React, { useState, useEffect } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'

import Categories from './categories'
import TaskList from './taskList'
import Head from './head'
import HeaderAll from './headersAll'

const Home = () => {
  const { category, timespan } = useParams()

  const [dirList, setDirList] = useState([])
  const [taskList, setTaskList] = useState([])
  const [timespanList, setTimespanList] = useState([])
  const [refreshState, setRefresh] = useState(false)

  const getRefresh = () => {
    return refreshState
  }

  useEffect(() => {
    axios.get(`/api/v1/tasks/`).then(({ data }) => {
      setDirList(data)
    })
  }, [])

  useEffect(() => {
    console.log('Renew task list')
    if (typeof category !== 'undefined') {
      axios.get(`/api/v1/tasks/${category}`).then(({ data }) => {
        setTaskList(data)
      })
    }
  }, [category, refreshState])

  useEffect(() => {
    if (typeof timespan !== 'undefined') {
      axios.get(`/api/v1/tasks/${category}/${timespan}`).then(({ data }) => {
        setTimespanList(data)
      })
    }
  }, [timespan])
  //
  return (
    <div>
      <Head title="Hello" />
      <div>
        <HeaderAll />
      </div>
      <div>
        <Route exact path="/" component={() => <Categories dirList={dirList} />} />
        <Route exact path="/:category" component={() => <TaskList refresh={setRefresh} state={getRefresh} tasks={taskList} />} />
        <Route exact path="/:category/:timespan" component={() => <TaskList time={timespanList} />} />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
