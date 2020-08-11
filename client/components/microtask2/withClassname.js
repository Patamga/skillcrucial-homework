import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

const Home = () => {

  const classButtonHeader = 'w-full h-64 flex bg-teal-700 hover:bg-teal-800 xl:hover:bg-teal-700 text-white text-3xl font-thin center flex-col border border-gray-400 cursor-pointer xl:cursor-default'
  const classContentBlock = 'w-full flex h-full border border-gray-400 bg-gray-100 p-5'
  const classColumn = classNames()
  console.log(classColumn)

  const [valueHeader, setValueHeader] = useState('')
  const classVisibleOrHidden = {
    visibility: 'm-2 w-full h-screen w-auto flex flex-col ',
    hidden: 'm-2 w-full hidden sm:hidden md:hidden lg:hidden xl:flex flex-col h-screen  '
  }

  const [classColumn1, setCol1] = useState(classVisibleOrHidden.hdden)
  const [classColumn2, setCol2] = useState(classVisibleOrHidden.visibility)

  const changeValueHeader = (e) => {
    const selectedValue = e.target.value
    setValueHeader(selectedValue)
  }

  useEffect(() => {
    if (classColumn1 === classVisibleOrHidden.visibility) {
      setCol1(classVisibleOrHidden.hidden)
    } else {
      setCol1(classVisibleOrHidden.visibility)
    }
    if (classColumn2 === classVisibleOrHidden.visibility) {
      setCol2(classVisibleOrHidden.hidden)
    } else {
      setCol2(classVisibleOrHidden.visibility)
    }
  }, [valueHeader])
  return (
    <div>
      <div className="flex flex-row center p-2">
        <div className={classColumn1}>
          <button
            type="button"
            value="USERS"
            className={classButtonHeader}
            onClick={changeValueHeader}
          >
            USERS
          </button>
          <div className={classContentBlock}>for users</div>
        </div>
        <div className={classColumn2}>
          <button
            type="button"
            value="COMPANIES"
            className={classButtonHeader}
            onClick={changeValueHeader}
          >
            COMPANIES
          </button>
          <div className={classContentBlock}>for companies</div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
