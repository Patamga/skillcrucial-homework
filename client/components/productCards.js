import React from 'react'
import Price from './price'
import BasketAdd from './AddInBasket'

const Product = (props) => {

  return (
    <div className="flex flex-wrap">
      {props.catalog.map((item) => {
        return (
          <div key={item.id} className="flex h-80 mx-2">
            <div className="border border-gray-400 rounded-lg border-1 my-2 py-2 h-100 w-50 bg-white">
              <img
                className="object-contain sm:object-none md:object-none lg:object-none object-scale-down h-48 w-full"
                src={item.image}
                alt={item.description}
              />
              <div className="px-2 py-2 font-light text-xl mb-2">
                {item.title}
                <p className="font-hairline text-gray-700 text-base">{item.description}</p>
              </div>
              <Price priseDefault={item.price} />
              <div className="flex content-end text-white px-2 pb-2">
                <BasketAdd id={item.id} price={item.price} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

Product.propTypes = {}

export default React.memo(Product)
