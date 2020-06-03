import React from 'react'
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

const Header = () => {
  // const { categoryName, repository } = useParams()
  // const [toggled, toggle] = useState(false)

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <Link to="/">w12 &#9842; TODO</Link>
        </span>
      </div>
    </nav>
  )
}
Header.propTypes = {}

export default React.memo(Header)
