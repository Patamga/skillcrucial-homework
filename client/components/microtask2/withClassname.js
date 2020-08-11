import React, { useState } from 'react'
import Gist from 'react-gist'
import classNames from 'classnames'

const Component = () => {
  const classButtonHeader ='w-full h-64 flex bg-teal-700 hover:bg-teal-800 xl:hover:bg-teal-700 text-white text-3xl font-thin center flex-col border border-gray-400 cursor-pointer xl:cursor-default'
  const classContentBlock ='w-full flex flex-col h-full border border-gray-400 bg-gray-100 p-5'
  const [toggle, setToggle] = useState(true)
  const classUsers = classNames({
    'flex flex-col': toggle,
    'hidden sm:hidden md:hidden lg:hidden xl:flex flex-col': !toggle,
    'flex-col h-screen m-2 w-full h-screen': true
  })
  const classCompanies = classNames({
    'flex flex-col': !toggle,
    'hidden sm:hidden md:hidden lg:hidden xl:flex flex-col': toggle,
    'h-screen m-2 w-full h-screen': true
  })

  return (
    <div>
      <div className="flex flex-row center p-2">
        <div className={classUsers}>
          <button type="button" className={classButtonHeader} onClick={() => setToggle(!toggle)}>
            USERS
          </button>
          <div className={classContentBlock}>
            <div className="flex"> c модулем Classname</div>
            <div className="trx w-full ">
              <Gist id="6c51ba3b6c392b2ef336c2214e13ee11" file="component-with-Classname" />
            </div>
          </div>
        </div>
        <div className={classCompanies}>
          <button type="button" className={classButtonHeader} onClick={() => setToggle(!toggle)}>
            COMPANIES
          </button>
          <div className={classContentBlock}>
            <div className="flex"> companies content</div>
          </div>
        </div>
      </div>
    </div>
  )
}

Component.propTypes = {}

export default Component
