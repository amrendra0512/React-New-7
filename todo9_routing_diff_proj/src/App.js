import React from 'react'
import './App.css'
import Routing from './components/Routing'
import MainComponents from './components/MainComponents'

const App = () => {
  return (
    <div className='app'>
      <MainComponents/>
      <Routing/>
    </div>
  )
}

export default App

