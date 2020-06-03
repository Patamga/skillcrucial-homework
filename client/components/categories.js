import React from 'react'
import { Link } from 'react-router-dom'

const Categories = (props) => {

  return (
    <div>

      <div>
        {props.dirList.map((category) => {
          return (
            <div key={category} className="mt-2 text-gray-600 list-disc">
              <ul className="list-none list-inside bg-gray-200">
                <li className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">
                  <Link to={`/${category}`}>
                    &equiv;<span>&emsp;</span>
                    {category}
                  </Link>
                </li>
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Categories.propTypes = {}

export default React.memo(Categories)
