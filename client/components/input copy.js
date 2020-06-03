// import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// // import { Link } from 'react-router-dom'
// import { history } from '../redux'

// const Input = () => {
//   const [inputTextValue, setInputTextValue] = useState('')
//   // const [taskList, setTaskList] = useState([])
//   const { categoryName } = useParams()

//   const onChange = (e) => {
//     const newValue = e.target.value
//     setInputTextValue(newValue)
//   }

//   useEffect(() => {
//     if (typeof categoryName !== 'undefined') {
//       axios
//         .post(`http://localhost:8090/api/v1/tasks/${categoryName}`, { title: inputTextValue })
//         .then(({ data }) => {
//           setTaskList(data)
//         })
//         .catch(() => {
//           'уже усть такая'
//         })
//     }
//   }, [categoryName])

//   return (
//     <div>
//       <div className="max-w-sm mx-auto flex-auto p-6 bg-white rounded-lg shadow-xl items-center">
//         <div className="flex w-auto items-center border-b border-b-2 border-teal-500 py-2 ">
//           <input
//             id="input-field"
//             type="text"
//             value={inputTextValue}
//             onChange={onChange}
//             className="flex appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none max-w-xs"
//             aria-label="Full name"
//             placeholder="GitHub user name"
//             onKeyDown={(e) => {
//               if (e.key === 'Enter') {
//                 history.push(`/${inputTextValue}`)
//               }
//             }}
//           />
//           <button
//             id="search-button"
//             type="button"
//             onClick={() => history.push(`/${inputTextValue}`)}
//             className="flex bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
//           >
//             SHOW
//           </button>
//         </div>
//       </div>
//       {/* <Link to={`/${user}`}>Go</Link> */}
//     </div>
//   )
// }

// Input.propTypes = {}

// export default React.memo(Input)
