import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Product from './Pages/Product'
import NotFound from './Pages/NotFound'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Courses from './Pages/Courses'
import CoursesDetails from './Pages/CoursesDetails'

function App() {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/courses' element={<Courses />}/>
          <Route path='/courses/:Coursesid' element={<CoursesDetails/>}/>

          <Route path='/product' element={<Product />}>
            <Route path='men' element={<Men/>}/>
            <Route path='women' element={<Women/>}/>
            <Route path='kids' element={<Kids/>}/>
          </Route>

          
          <Route path='*' element={<NotFound />}/>
       </Routes>
      <Footer />
    </div>
  )
}

export default App
