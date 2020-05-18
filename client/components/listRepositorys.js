import React from 'react'
import Head from './head'

const ListRepositorys = (props) => {
  return (
    <div>
      <Head title="Hello" />
      <span>jjjj</span>
      {props.data}
    </div>
  )
}

ListRepositorys.propTypes = {}

export default React.memo(ListRepositorys)
