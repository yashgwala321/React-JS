import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex px-8 bg-cyan-900 justify-between w-full h-20 items-center'>
      <h2 className='text-xl font-bold cursor-default'>Navbar</h2>
      <div className='flex gap-10'>
        <Link className='text-lg font-medium' to="/">Home</Link>
        <Link className='text-lg font-medium' to="/about">About</Link>
        <Link className='text-lg font-medium' to="/courses">Courses</Link>
        <Link className='text-lg font-medium' to="/product">Product</Link>
      </div>
    </div>
  )
}

export default Navbar