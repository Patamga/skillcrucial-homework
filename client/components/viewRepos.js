import React from 'react'
import ReactMarkdown from 'react-markdown'

const ViewRepo = (props) => {
  return (
    <div>
      <div className="md:flex">
        <div className="mt-4 md:mt-0 md:ml-6">
          <ReactMarkdown source={props.redme} />
          {/* <a href="#" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
          <p className="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p> */}
        </div>
      </div>
      {/* <div id="description" className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-xl">
        <ReactMarkdown source={props.redme} />
      </div> */}
    </div>
  )
}
// axios.get(`https://api.github.com/repos/${userName}/${repoName}/readme`, {param: {}, headers})

// const headers = {Accept: 'application/vnd.github.VERSION.html'}
// вернется вполне себе расшифрованный html

ViewRepo.propTypes = {}

export default React.memo(ViewRepo)
