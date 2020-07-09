import React from 'react'
import Message from './message'

const messageList = (props) => {
  props.mesag.map((item) => {
    return (
      <div className="flex items-start mb-4" key={item.time}>
        <Message item={item} />
      </div>
    )
  })

}

export default React.memo(messageList)
