import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className='nav'>
        <h3>Sheryians</h3>
        <div className='navlinks'>
          <Link to='/'>Home</Link>  
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/product'>Product</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
