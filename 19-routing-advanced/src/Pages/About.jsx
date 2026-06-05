import React from 'react'

function About() {

  const btnclick = () => {
    // console.log("Button Clicked !")
    
  }

  return (
    <div>
      <button onClick={btnclick} className='bg-emerald-400 font-medium px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Return To Home</button>
      <h1>About Page</h1>
    </div>
  )
}

export default About
