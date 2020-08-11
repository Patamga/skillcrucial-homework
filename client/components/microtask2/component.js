import React, { useState, useEffect} from 'react'


const Home = () => {
  const [valueHeader, setValueHeader] = useState('')
  const classVisibleOrHidden = {
    visibility: 'h-screen w-64 flex-col ',
    hidden: 'hidden sm:hidden md:hidden lg:hidden xl:flex flex-col h-screen w-64 '
  }
  const [col1, setCol1] = useState(classVisibleOrHidden.hdden)
  const [col2, setCol2] = useState(classVisibleOrHidden.visibility)

    const changeValueHeader = (e) => {
      const selectedValue = e.target.value
      setValueHeader(selectedValue)
    }

  useEffect(() => {
    if (col1 === classVisibleOrHidden.visibility) {
      setCol1(classVisibleOrHidden.hidden)
    } else {
      setCol1(classVisibleOrHidden.visibility)
    }
    if (col2 === classVisibleOrHidden.visibility) {
      setCol2(classVisibleOrHidden.hidden)
    } else {
      setCol2(classVisibleOrHidden.visibility)
    }
  }, [valueHeader])
  return (
    <div>
      <div className="flex flex-row center p-5">
        <div className={col1}>
          <input
            id="users"
            type="radio"
            name="react-tips"
            value="USERS"
            checked={valueHeader === 'USERS'}
            className=""
            onChange={changeValueHeader}
          />
          <label
            className="h-64 w-64 flex bg-gay-100 items-center justify-center flex-col border border-solid border-gray-600 cursor-pointer "
            htmlFor="users"
          >
            USERS
          </label>
          <div className="flex h-full border border-gray-300 bg-gray-100 p-5">for users</div>
        </div>
        <div className={col2}>
          <input
            id="companies"
            type="radio"
            name="react-tips"
            value="COMPANIES"
            checked={valueHeader === 'COMPANIES'}
            className=""
            onChange={changeValueHeader}
          />
          <label
            className="h-64 w-64 flex bg-gay-100 items-center justify-center flex-col border border-solid border-gray-600 cursor-pointer"
            htmlFor="companies"
          >
            COMPANIES
          </label>
          <div className="flex h-full border border-gray-300 bg-gray-100 p-5">for companies</div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
