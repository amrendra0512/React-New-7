import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="container-fluid d-flex justify-content-between bg-black text-white">
    <ul>
      <li className="d-flex justify-content-between list-unstyled gap-3 text-white">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/projects'>Projects</Link>
      </li>
    </ul>
    </div>
  )
}

export default Header
