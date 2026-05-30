import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function App() {

  const [data, setData] = useState([])

  // async function getData(){
  //   const responce = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(responce)
  // }


  // const getData = async () => {
  //   const responce = await fetch('https://jsonplaceholder.typicode.com/users')
  //   // console.log(responce)
  //   const data = await responce.json()
  //   console.log(data)
  // }


  //===========================
  // axios 
  //===========================
  
  // const getData = async () => {
  //   const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
  //   console.log(responce.data)
  // }


  const getData = async () => {
    const responce = await axios.get('https://picsum.photos/v2/list')
    // console.log(responce.data)
    setData(responce.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
         {data.map(function(elem, idx){
           return <h3 key={idx}>Hello, {elem.author} {idx}</h3>
         })}
      </div>
    </div>
  )
}

export default App