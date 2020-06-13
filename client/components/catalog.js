import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from './productCards'
import { getProducts } from '../redux/reducers/products'

const Catalog = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  const catalog = useSelector((store) => store.products)

  return (
    <div className="card flex flex-wrap content-center justify-center card">
      {catalog.map((item) => {
        return (
          <div key={item.id} className="card flex flex-wrap content-center justify-center card">
            <ProductCard item={item} />
          </div>
        )
      })}
    </div>
  )
}

Catalog.propTypes = {}

export default React.memo(Catalog)
