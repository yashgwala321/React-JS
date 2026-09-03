import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className=' p-5 bg-blue-950 flex justify-between items-center '>
            <h2 className='font-semibold text-2xl'>MediaX</h2>
            <div className='flex justify-between items-center gap-5 text-xl'>
                <Link className='text-xl bg-white text-black rounded px-4 py-2 font-medium active:scale-95' to='/'>Search</Link>
                <Link className='text-xl bg-white text-black rounded px-4 py-2 font-medium active:scale-95' to='/collection'>Collection</Link>
            </div>
        </div>    
    </div>
  )
}

export default Navbar
