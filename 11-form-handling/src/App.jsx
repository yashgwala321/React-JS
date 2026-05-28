import React from 'react'

function App() {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log()
  }
 
  return (
    <div>
       <form onSubmit={(e) => {
          submitHandler(e)
       }}>
          <input type="text" placeholder='Enter Your Name'/>
          <button>Submit</button>
       </form>
    </div>
  )
}

export default App
