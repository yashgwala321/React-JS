import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../Redux/Features/searchSlice'

function Tabs() {

    const tabs = ['Photos' , 'Videos']

    const dispatch = useDispatch() 

    const activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className='flex gap-10 p-10 items-center justify-center'>
        {tabs.map(function(elem,idx){
            return <button
               className={`${activeTab==elem?'bg-blue-500':'bg-gray-600'} transition px-5 py-2 rounded uppercase cursor-pointer active:scale-95 `}
               key={idx} 
               onClick={()=>{
                dispatch(setActiveTabs(elem))
               }}
               >
            {elem}
            </button>
        })}
    </div>
  )
}

export default Tabs
