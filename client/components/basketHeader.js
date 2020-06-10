import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './changeCurrency.scss'
import bascket from './Cart.png'

const BasketHeader = () => {
  const rate = useSelector((store) => store.currencyChange.rate)
  const currency = useSelector((store) => store.currencyChange.currensy)
  // const rate = useSelector((store) => store.currencyChange.rate)

  const currencySymbol = () => {
    switch (currency) {
      case "USD":
        return <span>$</span>
      case 'CAD':
        return <span>С$</span>
        default:
          return <span>&#8364;</span>
    }
  }
  const basket = useSelector((store) => store.basket)
  const [quantity, setQuantity] = useState(0)
  const [amount, setAmount] = useState(0)
  // let amount = 0
  useEffect(() => {
    const qty = Object.values(basket).reduce((acc, rec) => {
      return acc + rec.qty
    }, 0)
    const amt = Object.values(basket).reduce((acc, rec) => {
      console.log('rec', rec)
      return acc + rec.price * qty
    }, 0)
    console.log(qty)
    setQuantity(qty)
    setAmount(amt)
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
        { amount !== 0 && (
          <div className="">
            {(amount * rate).toFixed(2)}
            {currencySymbol()}
          </div>
        )}
      </div>
    </div>
  )
}

BasketHeader.propTypes = {}

export default React.memo(BasketHeader)