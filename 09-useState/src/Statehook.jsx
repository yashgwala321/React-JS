import React from 'react'
import { useState } from 'react'

function Statehook() {

    const [Num, setNum] = useState(0)
    const [username, setUsername] = useState('Unknown')
    const [users, setUsers] = useState([10,20,30])

  function changeN(){
    setNum(10)
    setUsername('Yash')
    setUsers([30,20,10])
  }

  return (
    <>
      <div>
       <h1>Value of a is {Num} <br/> {users} <br/> Value of user is {username}</h1>
       <button onClick={changeN}>Click</button>
      </div>
      <hr/>
    </>
  )
}

export default Statehook
