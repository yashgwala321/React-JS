import { useState } from 'react'

function App() {

  const [title, setTitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, setTask] = useState([]) 

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({title,details})
    setTask(copyTask)
    
    console.log(copyTask)

    setTitle('')
    setdetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    // console.log(idx)
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen bg-black text-white flex'>
      
      {/* Left Side - Form */}
      <div className='w-1/2 p-10 border-r border-white-700'>
        <h1 className='text-4xl font-bold pb-8'>Add Notes</h1>
        <form onSubmit={(e) => { submitHandler(e) }} className='flex flex-col gap-4'>
          <input
            type="text"
            placeholder='Enter Notes Heading'
            className='px-5 py-3 w-full font-medium border-2 border-white-600 rounded-lg bg-transparent text-white outline-none placeholder-white-500'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          <textarea
            placeholder='Write Details'
            className='px-5 w-full font-medium h-48 py-3 outline-none border-2 border-white-600 rounded-lg bg-transparent text-white resize-none placeholder-white-500'
            value={details}
            onChange={(e) => {
              setdetails(e.target.value)
            }}
          />
          <button 
          className='bg-white cursor-pointer active:scale-95 active:bg-gray-600 text-black px-5 py-3 rounded-lg font-bold w-full outline-none hover:bg-gray-200 transition-all'
          >
            Add Note
          </button>
        </form>
      </div>

      {/* Right Side - Notes */}
      <div className='w-1/2 p-10'>
        <h1 className='text-4xl font-bold pb-8'>Recent Notes</h1>
        <div className='flex flex-wrap gap-4'>
           {task.map(function(elem ,idx){
             return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl bg-cover text-black p-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                 <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                 <p className='pt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
              </div>
              <button 
                className='w-full cursor-pointer active:scale-95 active:bg-red-900 bg-red-600 py-1 text-xs rounded font-bold text-white'
                onClick={()=>{
                  deleteNote(idx)
                }}
              >Delete</button>
             </div>
           })}
        </div>
      </div>

    </div>
  )
}

export default App