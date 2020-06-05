import React from 'react'
import Head from './head'
import Header from './header'
import Sort from './sort'
import Product from './productCards'

const Shop = () => {
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <Sort />
      <div className="mt-5 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:mt-16">
        <Product />
        <Product />
        <Product />
        <div className="bg-pink-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          This is dummy component
        </div>
      </div>
    </div>
  )
}

Shop.propTypes = {}

export default React.memo(Shop)
