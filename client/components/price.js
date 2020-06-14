import React from 'react'
import { useSelector } from 'react-redux'
import CarencySimbol from './carencySymbol'

const Price = (props) => {
  const rate = useSelector((store) => store.currencyChange.rate)
  return (
    <div className="card__price text-center py-2 ">
      <span className="card__price text-gray-700 text-xl font-bold px-2">
        {(props.priseDefault * rate).toFixed(2)}
        <span className="text-base px-1">
          <CarencySimbol />
        </span>
      </span>
    </div>
  )
}

Price.propTypes = {}

export default React.memo(Price)
