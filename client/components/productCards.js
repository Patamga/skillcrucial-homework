import React from 'react'


const Product = () => {
  return (
    <div>
      <div className="flex items-start">
        <div className="max-w-sm rounded overflow-hidden shadow-lg my-5 mx-10">
          <img
            className="w-full"
            src="https://picsum.photos/420/320?image=25"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-light text-xl mb-2"> Красивое Название товара </div>
            <p className="font-hairline text-gray-700 text-base">
              Может быть описание или категория.
            </p>
          </div>
          <div className="text-center  py-2">
            <div className="font-regular mb-2">
              <span className="text-pink-700 text-xl px-2"> 20 000</span>
              <span className="text-pink-700 px-2">$</span>
            </div>
          </div>
          <div className="flex content-end text-white px-6 py-4">
            <span className="text-4xl bg-gray-400 rounded-full h-16 w-16 flex items-center justify-center">
              -
            </span>
            <span className="text-xl text-center align-bottom font-normal text-gray-400 px-20">
              5 шт
            </span>
            <span className="text-4xl bg-pink-500 rounded-full h-16 w-16 flex items-center justify-center">
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Product.propTypes = {}

export default React.memo(Product)
