import React from 'react'

function Navbar(props) {

  function changetheme (){
    props.setTheme('Dark')
    console.log('theme change',props.setTheme)
  }  

  return (
    <div>
       <button onClick={changetheme}>Change Theme</button>
    </div>
  )
}

export default Navbar
