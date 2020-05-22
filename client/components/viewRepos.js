import React from 'react'
import ReactMarkdown from 'react-markdown'
import './viewRepos.scss'

const ViewRepo = (props) => {
  return (
    <div>
      <div className="md:flex mt-4 mx-3">
        <div className="mt-4 md:flex-shrink border-gray-400 markdown ">
          <ReactMarkdown source={props.redme} />
        </div>
      </div>
    </div>
  )
}
// axios.get(`https://api.github.com/repos/${userName}/${repoName}/readme`, {param: {}, headers})
// const headers = {Accept: 'application/vnd.github.VERSION.html'}
// вернется вполне себе расшифрованный html

ViewRepo.propTypes = {}

export default React.memo(ViewRepo)
