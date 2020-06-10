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
    <div className="text-center py-2">
      <span className="text-indigo-700 text-xl px-2">{(props.priseDefault * rate).toFixed(2)}</span>
      <span className="text-indigo-700 px-2">{currencySymbol()}</span>
    </div>
  )
}

Price.propTypes = {}

export default React.memo(Price)
