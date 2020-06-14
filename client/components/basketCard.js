import React from 'react'
import Price from './price'
import BasketAdd from './AddToBasket'

const Product = (props) => {
  const { item } = props
  return (
    <div className="flex py-5 max-w-md mx-auto ">
      <div className="">
        <img className="card__image h-12 p-2" src={item.image} alt={item.description} />
      </div>
      <div className="w-64 text-gray-700 text-base card__price text-center py-2">
        <span className="">{item.title}</span>
      </div>
      <div className="w-24">
        <Price priseDefault={item.price} />
      </div>
      <div className="w-48 ml-5">
        {' '}
        <BasketAdd id={item.id} title={item.title} price={item.price} />
      </div>
    </div>
  )
}

Product.propTypes = {}

export default React.memo(Product)
