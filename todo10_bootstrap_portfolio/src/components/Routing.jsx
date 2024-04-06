import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Project from '../pages/Project'
import Movies from '../pages/Movies'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/projects' Component={Project} />
        <Route path='/movie/:id' Component={Movies} />
        <Route path='*' Component={PageNotFound} />
      </Routes>
    </div>
  )
}

export default Routing
