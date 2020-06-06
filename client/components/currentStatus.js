import React from 'react'
// import Working from './img/working.png'
const img = {
  working: '/img/working.png',
  done: '/img/successfully.png',
  blocked: '/img/sleeping.png',
  new: '/img/new.png'
}
let status = img.new

const InProgress = (props) => {
  switch (props.status) {
    case 'new':
      status = img.new
      break
    case 'in progress':
      status = img.working
      break
    case 'blocked':
      status = img.blocked
      break
    case 'done':
      status = img.done
      break
    default:
      status = img.burglary

  }

  return (
    <div className="h-10 w-10 mr-0 bg-white text-gray-800 font-semibold  shadow">
      <img src={status} alt=" " />
    </div>
  )
}

InProgress.propTypes = {}

export default React.memo(InProgress)
