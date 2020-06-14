import React from 'react'
import { useSelector } from 'react-redux'

const TotalAmount = () => {
  const rate = useSelector((store) => store.currencyChange.rate)
  const basket = useSelector((store) => store.basket)
  return (basket.sum * rate).toFixed(2)
}

TotalAmount.propTypes = {}

export default React.memo(TotalAmount)
