import React from 'react'
import { useSelector } from 'react-redux'
import Price from './price'
import BasketAdd from './AddInBasket'

const ProductBasket = (props) => {
  const basket = useSelector((store) => store.basket)
  const basketList = props.catalog.reduce((acc, rec) => {
    if (rec.id in basket) {
      return [...acc, rec]
    }
    return acc
  }, [])

  return (
    <div className="flex flex-col mb-4">
      {basketList.map((item) => {
        return (
          <div
            key={item.id}
            className="flex w-full inline-block shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
          >
            <div className="flex px-6 py-4 font-light text-xl mb-2">
              <img
                className="product__image object-contain sm:object-none md:object-none lg:object-none object-scale-down h-48 "
                src={item.image}
                alt={item.description}
              />
            </div>
            <div className="product__title flex px-6 py-4 font-light text-xl mb-2">
              {item.title}
              <p className="flex font-hairline text-gray-700 text-base">{item.description}</p>
            </div>
            <div className="product__price flex">
              <Price priseDefault={item.price} />
            </div>
            <div className="flex content-end text-white px-6 pb-4 ">
              <BasketAdd id={item.id} price={item.price} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

ProductBasket.propTypes = {}

export default React.memo(ProductBasket)
