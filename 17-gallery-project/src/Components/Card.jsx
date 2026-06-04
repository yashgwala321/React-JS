import React from 'react'

function Card(props) {
  return (
    <div>
       <a className='cursor-pointer' href={props.elem.url}>
            <div className='h-40 w-44 rounded-xl overflow-hidden'>
                <img className='h-full object-cover' src={props.elem.download_url} alt="" />
            </div>
            <h2 className='font-bold text-lg'>{props.elem.author}</h2>
       </a> 
    </div>
  )
}

 export default Card
 