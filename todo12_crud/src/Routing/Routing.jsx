import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import CreateForm from '../components/CreateForm'
import EditData from '../components/EditData'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' Component={App}/>
        <Route path='/createform' Component={CreateForm}/>
        <Route path='/edit' Component={EditData}/>
      </Routes>
    </div>
  )
}

export default Routing
