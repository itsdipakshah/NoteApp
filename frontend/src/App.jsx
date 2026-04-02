import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Createnote from './pages/Createnote'

const App = () => {
  return (

   <div className='flex flex-col min-h-screen bg-gray-900 text-white'>
    <Navbar/>

   <main className='flex-1 container mx-auto p-4'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<Createnote/>} />
    </Routes>
   </main>



    <Footer/>
   </div>
    
  )
}

export default App