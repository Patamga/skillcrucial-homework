import React from 'react'
import { useParams } from 'react-router-dom'
// import axios from 'axios'

const Header = () => {
  const { userName } = useParams()

  return (
    <div>
      <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl mb-3">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2 ">
          {userName && <span>Repositories for {userName}</span>}
        </div>
      </div>
    </div>
  )
}
Header.propTypes = {}

export default React.memo(Header)
