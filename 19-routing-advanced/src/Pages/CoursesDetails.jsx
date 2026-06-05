import React from 'react'
import { useParams } from 'react-router-dom'

function CoursesDetails() {

   const params = useParams()
    
  return (
    <div>
      <h1>{params.Coursesid} Course Details Page</h1>
    </div>
  )
}

export default CoursesDetails
