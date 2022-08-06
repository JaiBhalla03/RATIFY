import React from 'react'
import Home from './Home'
import Promotion from './Promotion'
import Explore from './Explore'
import About from './About'
import Future from './Future'
import Topsellers from './Topsellers'
import Contact from './Contact'

const Main = () => {
  return (
    <div className="main">
      <Home/>
      <Topsellers/>
      <Promotion/>
      <About/>
      <Future/>
      <Contact/>
    </div>
  )
}

export default Main