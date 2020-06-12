import React from 'react'
import { useSelector } from 'react-redux'

const Price = (props) => {
  const currency = useSelector((store) => store.currencyChange.currensy)
  const rate = useSelector((store) => store.currencyChange.rate)

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
  return (
    <div className=".card__price text-center py-2 ">
      <span className=".card__price text-indigo-700 text-xl font-bold px-2">
        {(props.priseDefault * rate).toFixed(2)}
      </span>
      <span className="text-indigo-700 px-2">{currencySymbol()}</span>
    </div>
  )
}

Price.propTypes = {}

export default React.memo(Price)
