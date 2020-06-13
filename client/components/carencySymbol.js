import React from 'react'
import { useSelector } from 'react-redux'

const Shop = () => {
  const currency = useSelector((store) => store.currencyChange.currency)

  const currencySymbol = () => {
    switch (currency) {
      case 'USD':
        return <span>$</span>
      case 'CAD':
        return <span>С$</span>
      default:
        return <span>&#8364;</span>
    }
  }
  return currencySymbol()
}

Shop.propTypes = {}

export default React.memo(Shop)




