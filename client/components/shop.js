import React from 'react'
import Head from './head'
import Header from './header'
import Catalog from './catalog'
import Sort from './sort'

const Shop = () => {
  return (
    <div className="bg-gray-200 w-full">
      <Head title="Hello" />
      <Header />
      <Sort />
      <Catalog />
    </div>
  )
}

Shop.propTypes = {}

export default React.memo(Shop)
