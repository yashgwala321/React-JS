import React from 'react'
import { useState } from 'react'

function App() {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form Submited...." , title)
    setTitle('')
  }
 
  return (
    <div>
       <form onSubmit={(e)=>{
          submitHandler(e)
       }}>
          <input 
          type="text" 
          placeholder='Enter Your Name'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}/>

          {/* <h2>{title}</h2> */}
          <button>Submit</button>
       </form>
    </div>
  )
}

export default App