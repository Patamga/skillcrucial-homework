import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between text-white flex-wrap bg-pink-700 p-6">
        <div className="flex items-center flex-shrink-0 mr-6">
          <span className="font-semibold text-base tracking-tight px-1">
            <Link id="brand-name" to="/logs" className="font-semibold tracking-tight">
              W13
            </Link>
          </span>
          <span
            className="font-semibold text-base tracking-tight px-1"
            role="img"
            aria-label="list"
          >
            &#9752;
          </span>
          <span className="px-2">
            <Link id="brand-name" to="/" className="font-semibold text-2xl tracking-tight">
              Shopping
            </Link>
          </span>
        </div>
        <div className="flex items-center flex-shrink-0 mr-6">
          <button type="button">EUR | </button>
          <button type="button" className="flex items-center px-1">
            USD |
          </button>
          <button type="button" className="flex items-center px-1">
            CAD
          </button>
        </div>
        <div className=" items-center flex-shrink-0 mr-6">
          <div className="h-10 w-12 rounded-lg shadow-inner bg-white p-2 ">
            <Link id="#order-count" to="/basket" className="font-semibold text-m tracking-tight">
              <span className="px-2" role="img" aria-label="list">
                {' '}
                &#128722;
              </span>
            </Link>
          </div>
        </div>
        <div>Quantity </div>
        <div>Total amount</div>
      </nav>
    </div>
  )}
Header.propTypes = {}

export default React.memo(Header)
