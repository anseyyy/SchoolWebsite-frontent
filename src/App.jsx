import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import VisitUs from './pages/VisitUs'
import ApplyForm from './components/ApplyForm'
import Programs from './components/Programs'
import FacilityPage from './pages/FacilityPage'
import Login from './pages/Login'
import Admin from './pages/Admin'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Register from './pages/Register'



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      
      <Route path='/' element={<Landing/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/visitus' element={<VisitUs/>} />
      <Route path='/applyform' element={<ApplyForm/>} />
      <Route path='/programs' element={<Programs/>} />
      <Route path='/facility' element={<FacilityPage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />

      <Route path='/admin' element={<Admin />} />




      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
