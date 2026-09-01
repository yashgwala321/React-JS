import { useDispatch, useSelector } from "react-redux"
import { decrement, increment , incrementByAmount} from "./Redux/Features/CounterSlice"
import { useState } from "react"


function App() {

  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)
  const [num,setNum] = useState(5)

  return (
    <div> 
      <h1>{count}</h1>

      <button onClick={()=>{
        dispatch(increment())
      }}>
        increment
      </button>

      <button onClick={()=>{
        dispatch(decrement())
      }}>
        decrement
      </button>

      <input 
        value={num}
        type="number" 
        onChange={(e) => {
          setNum(e.target.value)
      }}/>

      <button onClick={()=>{
        dispatch(incrementByAmount(Number(num)))
      }}>
        increse by 10
      </button>

     
    </div>
  )
}

export default App
