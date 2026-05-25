import React from 'react'

function App() {

  const btnCliked = () => {
    console.log("botton click")
  }

  const mouseEnter = () => {
    console.log("Mouse Entered!")
  }

  const funPass = (val) => {
    console.log(val)
  }

  const pagescrolling = (e) => {
    // console.log("Page Scrolling... at Speed",e)
    if(e>0){
      console.log("Sidha Scroing...")
    }else{
      console.log("Ulta Scroing...")
    }
  } 

  return (
    <div>
       <h1>Hello, Yash</h1>

       <button onMouseEnter={mouseEnter} onClick={btnCliked}>Change Under</button>

       <button onClick={btnCliked}>Explore This</button>

       <button onClick={function(){
          console.log("Hello Guys")
       }}>Click This</button>

       <div>
          <input onClick={function(){
            console.log("Input par click hua hai")
          }} type="text" placeholder='Input Clicked' />

          <input onChange={function(){
            console.log("User Typering kar raha hai")
          }} type="text" placeholder='User is typeing'/>

          <input onChange={function(e){
            console.log(e.target.value)
          }} type="text" placeholder='Enter'/>

          <input onChange={function(ele){
            funPass(ele.target.value)
          }} type="text" placeholder='Enter Name' />
       </div>

       <div onMouseMove={(e)=>{
          console.log(e.clientX)
       }} className='box'>
           
       </div>



       <div onWheel={(e)=>{
        //  console.log(e.deltaY)
        pagescrolling(e.deltaY)
       }}>
         <div className="page1"></div>
         <div className="page2"></div>
         <div className="page3"></div>
       </div>
    </div>
  )
}

export default App
