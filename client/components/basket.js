import React from 'react'
import { useSelector } from 'react-redux'
import Header from './header'
import ProductBasket from './basketCard'
// import { getSum } from '../redux/reducers/basket'

const Basket = () => {
  const catalog = useSelector((store) => store.products)
  const basket = useSelector((store) => store.basket)

  const basketList = catalog.reduce((acc, rec) => {
    if (rec.id in basket) {
      return [...acc, rec]
    }
    return acc
  }, [])

  return (
    <div>
      <Header />

      <div className="card flex flex-wrap content-center justify-center card">
        {basketList.map((item) => {
          return (
            <div key={item.id} className="card flex flex-wrap content-center justify-center card">
              <ProductBasket item={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
