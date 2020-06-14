import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import bascket from './Cart.png'
import CarencySimbol from './carencySymbol'
import TotalAmount from './totalAmount'

const BasketHeader = () => {
  const basket = useSelector((store) => store.basket)
  const [quantity, setQuantity] = useState(0)
  useEffect(() => {
    const qty = Object.values(basket.items).reduce((acc, rec) => {
      return acc + rec.qty
    }, 0)
    setQuantity(qty)
  }, [basket])

  return (
    <div className=" items-center text-gray-200 flex mr-6">
      <div className="h-10 w-12 rounded-lg shadow-inner p-2 ">
        <Link id="#order-count" to="/basket" className="font-semibold text-m tracking-tight">
          <img className="pb-1" src={bascket} alt="cart" />
        </Link>
      </div>
      <div className="flex-col">
        {quantity !== 0 && (
          <div className="bg-indigo-600 rounded-full h-5 w-5 flex items-center justify-center text-xs">
            {quantity}
          </div>
        )}
        {basket.sum !== 0 && (
          <div className="">
            <TotalAmount />
            <CarencySimbol />
          </div>
        )}
      </div>
    </div>
  )
}

BasketHeader.propTypes = {}

export default React.memo(BasketHeader)
