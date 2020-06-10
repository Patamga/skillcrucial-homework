import React, {useState, useEffect} from 'react'
// import { useSelector } from 'react-redux'
import axios from 'axios'
import Header from './header'
import ProductBasket from './basketCard'


const Basket = () => {
  const [catalog, setCatalog] = useState([])

  useEffect(() => {
    axios.get(`/api/v1/catalog`).then(({ data }) => {
      setCatalog(data)
      console.log(data)
    })
  }, [])

  return (
    <div>
      <Header />
      <ProductBasket catalog={catalog} />
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
