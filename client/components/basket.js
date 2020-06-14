import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './header'
import ProductBasket from './basketCard'
import TotalAmount from './totalAmount'
import CarencySimbol from './carencySymbol'

const Basket = () => {
  const catalog = useSelector((store) => store.products)
  const basket = useSelector((store) => store.basket.items)

  const basketList = catalog.reduce((acc, rec) => {
    if (rec.id in basket) {
      return [...acc, rec]
    }
    return acc
  }, [])
  return (
    <div>
      <Header />
      <div className="max-w-full">
        {basketList.map((item) => {
          return (
            <div key={item.id} className="card">
              <ProductBasket item={item} />
            </div>
          )
        })}
      </div>
      {Object.keys(basket).length !== 0 && (
        <div className="max-w-full text-center text-indigo-700">
          <span className="text-xl">
            Total amount <TotalAmount />
          </span>
          <span className="text-base p-2">
            <CarencySimbol />
          </span>
        </div>
      )}
      {Object.keys(basket).length === 0 && (
        <div className="text-center">
          Your cart is empty.
          <Link id="brand-name" to="/" className="font-semibold  text-indigo-700 tracking- px-2">
            Continue shoping
          </Link>
        </div>
      )}
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
