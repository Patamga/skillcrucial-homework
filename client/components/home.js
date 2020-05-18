import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import InputComponent from './inputComponent'
import ListRepositorys from './listRepositorys'
import ViewRepo from './viewRepo'

import Head from './head'
// import Header from './header'

const Home = () => {
  // const { userName } = useParams()
  const [counter, setCounterNew] = useState(0)

  // const [currentProject, setCurrentProject] = useState('')

  // useEffect(() => {
  //   // eslint-disable-next-line
  //   console.log('Entered: ', userName)
  //   if (typeof userName !== 'undefined') {
  //     axios.get(`https://api.github.com/users/${userName}/repos`).then((it) => {
  //       setRepositoryList(it.data)
  //     })
  //   }
  // }, [userName])
  // useEffect(() => {
  //   if (typeof repository !== 'undefined') {
  //     axios.get(`https://api.github.com/users/:username/${repository}`).then(({ data }) => {
  //       setCurrentProject(data)
  //     })
  //   }
  // }, [repository])

  return (
    <div>
      <Head title="Hello" />
      {/* <Header projectList/> */}
      <button type="button" onClick={() => setCounterNew(counter + 1)}>
        updateCounter
      </button>
      <div> Hello World Dashboard {counter} </div>
      <div>
        <Route exact path="/" component={() => <InputComponent />} />
        <Route exact path="/:userName" component={() => <ListRepositorys />} />
        <Route exact path="/:userName/:repository" component={() => <ViewRepo />} />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
