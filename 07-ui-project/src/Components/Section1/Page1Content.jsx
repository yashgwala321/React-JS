import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function PageContext(props) {
  return (
    <div className='py-3 h-[90vh] gap-10 items-center px-18 flex'>
       <LeftContent />
       <RightContent users={props.users}/>
    </div>
  )
}

export default PageContext
