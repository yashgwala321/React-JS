import React from 'react'
import RightCard from './RightCard'

function RightContent(props) {
  return (
    <div id='right' className='h-full flex w-2/3 p-6 gap-10 flex-nowrap overflow-x-auto rounded-4xl'>
        {props.users.map(function(elem,idx){
          return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />
        })}
    </div>
  )
}

export default RightContent
