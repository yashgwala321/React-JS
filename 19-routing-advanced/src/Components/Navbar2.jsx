import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar2() {

    const navigate = useNavigate()

  return (
    <div className='py-3 px-5 bg-cyan-800'>
      <button 
       onClick={()=>{
         navigate('/')
       }}
       className='bg-amber-500 font-medium px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
       Return To Home
       </button>

       <button 
       onClick={()=>{
         navigate(-1)
       }}
       className='bg-amber-500 font-medium px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
       Back
       </button>
      
    </div>
  )
}

export default Navbar2
