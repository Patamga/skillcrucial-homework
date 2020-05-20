// https://raw.githubusercontent.com/Patamga/SeaBattle/master/README.md
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import base64 from 'base-64'
import utf8 from 'utf8'
import Head from './head'

const ViewRepo = () => {
  const { userName, repository } = useParams()
  const [repoDescription, setRepoDescription] = useState([])
  useEffect(() => {
    if (typeof repository !== 'undefined' && typeof userName !== 'undefined') {
      axios
        .get(`https://api.github.com/repos/${userName}/${repository}/contents/README.md`)
        .then(({ data }) => {
          setRepoDescription(utf8.decode(base64.decode(data.content)))
        })
    }
  }, [repository])

  return (
    <div>
      <Head title="Hello" />
      <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-xl">
        <ReactMarkdown source={repoDescription} />
      </div>
    </div>
  )
}

ViewRepo.propTypes = {}

export default React.memo(ViewRepo)
