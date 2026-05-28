import React, { useState } from 'react'

function App() {

  const [num, setNum] = useState([10,20,30])

  const btncliked = () => {
    const newNum = [...num]
    newNum.push(99)
    setNum(newNum)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btncliked}>clicked</button>
    </div>
  )
}

export default App




// ============================================
// OBJECT STATE + SPREAD OPERATOR METHOD
// ============================================

// function App() {

//   const [num, setNum] = useState({user:'Yash',age:21})

//   const btncliked = () => {
//     const newNum = {...num}
//     newNum.user = 'Harshi'
//     newNum.age = 18
//     console.log(newNum)
//     setNum(newNum)
//   }

//   return (
//     <div>
//       <h1>{num.user} , {num.age}</h1>
//       <button onClick={btncliked}>clicked</button>
//     </div>
//   )
// }




// ============================================
// FUNCTIONAL UPDATE METHOD
// ============================================

// function App() {

//   const [num, setNum] = useState({user:'Yash',age:21})

//   const btncliked = () => {
//     setNum(prev => ({...prev,age:18}))
//   }

//   return (
//     <div>
//       <h1>{num.user} , {num.age}</h1>
//       <button onClick={btncliked}>clicked</button>
//     </div>
//   )
// }

