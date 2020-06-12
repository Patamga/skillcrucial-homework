import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { useSelector } from 'react-redux'
// import { updateCurrency } from '../redux/reducers/currencyChange'
import Head from './head'
import Header from './header'
import Sort from './sort'
import Products from './productCards'

const Shop = () => {
  // const dispatch = useDispatch()
  const [catalog, setCatalog] = useState([])

  // const currensy = useSelector((store) => store.currencyChange.currensy)
  // console.log(currensy)

  useEffect(() => {
    axios.get(`/api/v1/catalog`).then(({ data }) => {
      setCatalog(data)
    })
  }, [])
  return (
    <div className="bg-gray-200">
      <Head title="Hello" />
      <Header />
      <Sort />
      {/* {currency} */}
      <div className="w-full">
        <Products catalog={catalog} />
      </div>
    </div>
  )
}

Shop.propTypes = {}

export default React.memo(Shop)
