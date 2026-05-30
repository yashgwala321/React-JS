import React from 'react'

function App() {

  // const user = localStorage.getItem('user')
  // const age = localStorage.getItem('age')

  // console.log(user,age)

  // localStorage.removeItem('age')
  // localStorage.removeItem('user')

  const user = {
    username: "Yash",
    age: 21,
    city: 'Ajmer'
  }

  localStorage.setItem('user', JSON.stringify(user))

  const userShow = JSON.parse(localStorage.getItem('user'))
  console.log(userShow) 

  return (
    <div>
       
    </div>
  )
}

export default App
