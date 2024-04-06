import React from 'react'
import {Routes, Route } from 'react-router-dom'
import App from '../App'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' Component={App}/>
      </Routes>
    </div>
  )
}

export default Routing
