import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './changeCurrency.scss'
import bascket from './Cart.png'

import { addQuantity, removeQuantity } from '../redux/reducers/basket'

const BasketCard = (props) => {
  const item = useSelector((store) => store.basket[props.id])
  const quantity = item && item.qty
  const dispatch = useDispatch()
  console.log('qty',quantity)
  if (quantity && quantity !== 0) {
    return (
      <div className="Flex w-full">
        <div className="flex w-full border-2 border-gray-300 border-solid rounded-lg grid grid-cols-3 divide-x divide-gray-400">
          <div className="px-2 text-xl text-left">
            <button
              className="text-gray-600 align-middle"
              type="button"
              onClick={() => dispatch(removeQuantity(props.id, props.price))}
            >
              <svg
                fill-current
                viewBox="0 0 35 32"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                className="h-8 w-8 pt-2"
              >
                <path fill="#A0AEC0" d="M25.312 17.312h-18.625v-2.625h18.625v2.625z" />
              </svg>
            </button>
          </div>
          <div className="justify-center text-center">
            <span className="font-hairline text-gray-700 text-2xl w-6 text-center font-normal text-gray-700">
              {quantity}
            </span>
          </div>
          <div className="px-2 text-xl text-right">
            <button
              className="text-indigo-600"
              type="button"
              onClick={() => dispatch(addQuantity(props.id, props.price))}
            >
              <svg
                fill-current
                viewBox="0 0 35 32"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                className="h-8 w-8 pt-2"
              >
                <path
                  fill="#5A67D8"
                  d="M25.312 17.312h-8v8h-2.625v-8h-8v-2.625h8v-8h2.625v8h8v2.625z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )

  }
    return (
      <div className="Flex w-full">
        <button
          className="text-white w-full"
          type="button"
          onClick={() => dispatch(addQuantity(props.id, props.price))}
        >
          <div className="flex justify-center text-center text-2xl py-2 bg-indigo-600 border-indigo-600 rounded-lg">
            <img className="w-8 h-8" src={bascket} alt="cart" />
          </div>
        </button>
      </div>
    )

    // return (
    //   <div className="Flex w-full">
    //     {quantity !== 0 && (
    //       <div className="flex text-2xl justify-between border-2 bg-indigo-600 border-indigo-600 border-solid rounded-lg grid grid-cols-3 divide-x divide-gray-400">
    //         <button
    //           className="text-white"
    //           type="button"
    //           onClick={() => dispatch(addQuantity(props.id, props.price))}
    //         >
    //           ADD
    //         </button>
    //       </div>
    //     )}
    //     {quantity && quantity !== 0 && (
    //       <div
    //         id="111"
    //         className="flex justify-between border-2 border-gray-300 border-solid rounded-lg grid grid-cols-3 divide-x divide-gray-400"
    //       >
    //         <div className="px-2 text-xl text-left">
    //           <button
    //             className="text-gray-600 align-middle"
    //             type="button"
    //             onClick={() => dispatch(removeQuantity(props.id, props.price))}
    //           >
    //             <svg
    //               fill-current
    //               viewBox="0 0 35 32"
    //               xmlns="http://www.w3.org/2000/svg"
    //               stroke="currentColor"
    //               className="h-8 w-8 pt-2"
    //             >
    //               <path fill="#A0AEC0" d="M25.312 17.312h-18.625v-2.625h18.625v2.625z" />
    //             </svg>
    //           </button>
    //         </div>
    //         <div className="justify-center text-center">
    //           <span className="font-hairline text-gray-700 text-2xl w-6 text-center font-normal text-gray-700">
    //             {quantity}
    //           </span>
    //         </div>
    //         <div className="px-2 text-xl text-right">
    //           <button
    //             className="text-indigo-600"
    //             type="button"
    //             onClick={() => dispatch(addQuantity(props.id, props.price))}
    //           >
    //             <svg
    //               fill-current
    //               viewBox="0 0 35 32"
    //               xmlns="http://www.w3.org/2000/svg"
    //               stroke="currentColor"
    //               className="h-8 w-8 pt-2"
    //             >
    //               <path
    //                 fill="#5A67D8"
    //                 d="M25.312 17.312h-8v8h-2.625v-8h-8v-2.625h8v-8h2.625v8h8v2.625z"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // )
}

BasketCard.propTypes = {}

export default React.memo(BasketCard)
