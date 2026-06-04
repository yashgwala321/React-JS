import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from  './Components/Card'

function App() {


  const [useData,setUserData] = useState([])
  const [index, setIndex] = useState(1)


  const getData = async () => {
   const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
   setUserData(response.data)
  }

  let printUserData = <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading....</h1>

  if(useData.length > 0){
    printUserData = useData.map(function(elem,idx){

      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }

  useEffect(function(){
    getData()
  },[index])

  return (
    <div className='bg-black h-screen p-4 overflow-auto text-white'>

      {/* <button 
      onClick={getData}
       className='bg-green-600 mb-3 px-5 py-2 rounded text-white active:scale-95'>
        Get Data
      </button> */}

      <div className='flex gap-4 flex-wrap p-2'> 
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4'>
        <button 
         onClick={()=>{
          if(index>1){
            setUserData([])
            setIndex(index-1)
          }
         }}
           className="bg-amber-400 h-12 w-24 flex items-center justify-center cursor-pointer active:scale-95 font-semibold text-black rounded">
           Prev
        </button>
        <h1 className='font-bold text-2xl'>Page {index}</h1>
        <button
         onClick={()=>{
          setUserData([])
          setIndex(index+1)
         }} 
           className="bg-amber-400 h-12 w-24 flex items-center justify-center cursor-pointer active:scale-95 font-semibold text-black rounded">
           Next
        </button>
      </div>
    </div>
  )
}

export default App
