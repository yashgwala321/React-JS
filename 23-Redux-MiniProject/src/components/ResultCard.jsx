import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../Redux/Features/collectionSlice'

function ResultCard({item}) {

    const dispatch = useDispatch()

    const handaladdToCollection = (item)=>{
        dispatch(addCollection(item))
        dispatch(addedToast())
    }

  return (
    <div className='h-80  w-80 bg-white rounded mb-20'>
        <a target='_blank' className='h-full' href={item.url}>
            {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt=""/> : "" }
            {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src} video/> : "" }
        </a>
        <div className=' h-15 w-full flex justify-center items-center cursor-default'>
            <button onClick={()=>{
                handaladdToCollection(item)
            }} 
            className='bg-red-600 text-amber-50 cursor-pointer p-2 w-20 rounded-xl font-bold'>Save</button>
        </div>
    </div>
  )
}

export default ResultCard
