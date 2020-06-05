import React from 'react'
import Header from './header'

const Basket = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col m-5">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <tbody className="bg-white">
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://picsum.photos/200/150?image=21"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-900">
                          Bernard Lane
                        </div>
                        <div className="text-sm leading-5 text-gray-500">
                          bernardlane@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-pink-700">45 000 $</div>
                  </td>
                  <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gr-700">5</div>
                  </td>
                  <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200 text-xl leading-5 text-gray-500">
                    <span className="px-2 h-8 w-8 items-center justify-center inline-flex text-xl leading-5 font-semibold rounded-full bg-gray-400 text-white">
                      &#8722;
                    </span>
                  </td>
                  <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200 text-xl leading-5 text-gray-500">
                    <span className="px-2 h-8 w-8 items-center justify-center inline-flex text-xl leading-5 font-semibold rounded-full bg-pink-400 text-white">
                      &#43;
                    </span>
                  </td>
                  <td className="px-2 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                      delit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
