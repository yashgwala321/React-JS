import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../Redux/Features/searchSlice'

const SearchBar = () => {

const [text ,setText] = useState('')

const dispath = useDispatch()

const submitHandler = (e) => {
    e.preventDefault()
    dispath(setQuery(text))

    setText('')
}

  return (
    <div>
       <form onSubmit={(e)=>{
        submitHandler(e)
        }} className='flex gap-5 p-10 bg-gray-900'>

          <input 
          required
          onChange={(e)=>{
            setText(e.target.value)
          }} 
          value={text} 
          className='border-2 px-4 py-2 text-xl rounded outline-none w-full' 
          type="text" 
          placeholder='Search Anything'/>

          <button 
          className='border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer active:scale-95' 
          >Search
          </button>
       </form>
    </div>
  )
}

export default SearchBar
