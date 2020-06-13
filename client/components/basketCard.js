import React from 'react'
import Price from './price'
import BasketAdd from './AddInBasket'

const Product = (props) => {
  const {item} = props
  return (
    <div
      className=" flex flex-col border-1 my-2 py-2 border-gray-400 bg-white rounded-lg h-76 w-64 p-2 m-2"
    >
      <div className="flex justify-center">
        <img className="card__image h-32" src={item.image} alt={item.description} />
      </div>
      <div className=" pb-0 mb-0 pt-4 h-32 px-2 py-2 font-light text-l mb-2">
        {item.title}
        <p className="mb-0 pb-0 font-hairline text-gray-700 text-sm">{item.description}</p>
      </div>
      <Price priseDefault={item.price} />
      <div className="flex content-end text-white px-2 pb-2">
        <BasketAdd id={item.id} title={item.title} price={item.price} />
      </div>
    </div>
  )
}

Product.propTypes = {}

export default React.memo(Product)