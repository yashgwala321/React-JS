import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import Navbar from './components/Navbar'
import { ToastContainer} from 'react-toastify';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen text-white w-full bg-gray-950'>
      <Navbar/>
      <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/Collection' element={<CollectionPage/>}/>
      </Routes>
      <ToastContainer/>
      <Footer/>
    </div>
  )
}

export default App
 