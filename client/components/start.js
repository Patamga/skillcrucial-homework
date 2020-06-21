// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { updateField } from '../redux/reducers/game'
// import Head from './head'
// import Field from './field'

// const Dummy = () => {
//   const dispatch = useDispatch()

//   const re = /^[0-9]*$/
//   const onChangeRow = (e) => {
//     if (re.test(e.target.value)) {
//       let row = e.target.value
//       dispatch(updateField(row))
//     }
//   }
//   const onChangeColumn = (e) => {
//     if (re.test(e.target.value)) {
//       let column = e.target.value
//       dispatch(updateField(column))
//     }
//   }

//   // const qtySquare = rowSize * columnSize

//   // const fieldSize = (size) => {
//   //   const arr = new Array(size).fill(1).map((it, index) => {
//   //     return index + 1
//   //   })
//   //   setPlayItems(arr)
//   // }

//   return (
//     <div>
//       <Head title="Hello" />
//       <div className="flex items-center justify-center h-screen">
//         <div>
//           <div className="flex">
//             <input
//               type="text"
//               value={rowSize}
//               onChange={onChangeRow}
//               className="w-20 text-center appearance-none block bg-gray-200 text-gray-700 border border-blue-500 rounded py-2 px-3   focus:outline-none focus:bg-white mx-3"
//               placeholder="rows"
//             />
//             <input
//               type="text"
//               value={columnSize}
//               onChange={onChangeColumn}
//               className="w-20 text-center appearance-none block bg-gray-200 text-gray-700 border border-blue-500 rounded py-2 px-3   focus:outline-none focus:bg-white mx-3"
//               placeholder="columns"
//             />
//             <button
//               type="button"
//               disabled={!(columnSize > 0 && rowSize > 0)}
//               onClick={() => fieldSize(qtySquare)}
//               className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-4  border border-blue-500 hover:border-transparent rounded"
//             >
//               START
//             </button>
//           </div>
//           <Field playItems={playItems} columnSize={columnSize} />
//         </div>
//       </div>
//     </div>
//   )
// }

// Dummy.propTypes = {}

// export default React.memo(Dummy)
