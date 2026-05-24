import React from 'react'

function RightCardContent(props) {
    console.log(props)
  return (
     <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-10'>
            <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center font-bold'>{props.id+1}</h2>
            <div>
                <p className='text-white text-xl leading-normal mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, expedita.</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-700 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-700 text-white font-medium px-4 py-2 rounded-full'><i className='ri-arrow-right-long-line'></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent