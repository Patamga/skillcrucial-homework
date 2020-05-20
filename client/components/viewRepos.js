import React from 'react'
import ReactMarkdown from 'react-markdown'
import Head from './head'

const ViewRepo = (props) => {
  return (
    <div>
      <Head title="Hello" />
      <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-xl">
        <ReactMarkdown source={props.redme} />
      </div>
    </div>
  )
}
// axios.get(`https://api.github.com/repos/${userName}/${repoName}/readme`, {param: {}, headers})

// const headers = {Accept: 'application/vnd.github.VERSION.html'}
// вернется вполне себе расшифрованный html

ViewRepo.propTypes = {}

export default React.memo(ViewRepo)
