import React from 'react'

const Edit = () => {
  return (
    <div>
      <button
        type="button"
        className="h-10 w-10 bg-white hover:bg-gray-200 text-gray-800 font-semibold py-1 px-2 mr-2 border border-gray-400 rounded shadow"
      >
        <span role="img" aria-label="edit">
          &#9999;
        </span>
      </button>
    </div>
  )
}

Edit.propTypes = {}

export default React.memo(Edit)
