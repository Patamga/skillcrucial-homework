import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import Head from './head'
import HeadersAll from './headersAll'
import Categories from './categories'
import TodoList from './TodoList'

const Todo = () => {
  const [dirList, setDirList] = useState([])

  useEffect(() => {
    axios.get(`/api/v1/tasks/`).then(({ data }) => {
      setDirList(data)
    })
  }, [])

  return (
    <div>
      <Head title="Hello" />
      <HeadersAll />
      <div className="">
        <div className="">
          <div>
            <Route exact path="/" component={() => <Categories dirList={dirList} />} />
            <Route exact path="/:category" component={() => <TodoList />} />
            <Route exact path="/:category/:timespan" component={() => <TodoList />} />
          </div>
        </div>
      </div>
    </div>
  )
}

Todo.propTypes = {}

export default React.memo(Todo)
