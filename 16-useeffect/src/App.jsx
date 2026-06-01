import React, { useEffect, useState } from 'react'

function App() {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)


  function aChanging(){
    console.log('A ki value change ho gai')
  }

  function bChanging(){
    console.log('b ki value change ho gai')
  }

  useEffect(function(){
    aChanging()
    // console.log("use effect changing....") 
  },[a])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button 
      style={{padding:"10px 20px",margin:"10px"}}
      onClick={()=>{
        setA(a + 1)
      }}>Change A</button>

      <button
      style={{padding:"10px 20px",margin:"10px"}}
      onClick={()=>{
        setB(b - 1)
      }}>Chnage B</button>
    </div>
  )
}

export default App












//============================
// 2nd Example 
//============================


// function App() {

//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)


//   useEffect(function(){
//     console.log("use effect is running....")
//   },[num])

//   return (
//     <div>
//       <h1>num {num}</h1>
//       <h1>num2 {num2}</h1>
//       <button 
//       onMouseEnter={()=>{
//         setNum(num + 1)
//       }}
//       onMouseLeave={()=>{
//         setNum2(num2 + 10)
//       }}>Click Me</button>
//     </div>
//   )
// }
