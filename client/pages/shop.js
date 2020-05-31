import React from 'react'
import Header from '../components/header'
// import Home from './components/home'
import Head from '../components/head'

const Dummy = () => {
  return (
    <div>
      <Head title="Shop &#9752;" />
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          This is dummy component &#10005; &#9752; &#36; &#67; &#99; &#8364; &#8381;
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
