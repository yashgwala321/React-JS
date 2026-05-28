import React, { useState } from 'react'

function Counter() {

  const [Num, setNum] = useState(0)

  function increaseNum(){
    setNum(Num+1)
  }

  function decreaseNum(){
    setNum(Num-1)
  }

  function jum5Num(){
    setNum(Num+5)
  }

  function restart(){
    setNum(0)
  }

  return (
    <>
       <div>
          <h2>{Num}</h2>
          <button onClick={increaseNum}>Increase</button>
          <button onClick={decreaseNum}>Decrease</button>
          <br/>
          <button onClick={jum5Num}>Increase 5</button>
          <button onClick={restart}>Restart</button>
       </div>
    </>
  )
}

export default Counter