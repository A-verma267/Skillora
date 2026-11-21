import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../frontend/src/component/Navbar'
import Sidebar from '../../frontend/src/component/Sidebar'
import { Route, Router, Routes } from 'react-router-dom'
import Dashboard from '../../frontend/src/pages/Dashbaord'
import Project from './pages/Project'
import NonLogin from './pages/nonLogin'
import Login from './pages/Login'
import { UserContext } from './context/UserContext'
import Home from './pages/Home'
import Plans from './pages/Plans'
import Tutor from './pages/Tutor'
import Profile from './pages/Profile'
import CheckoutPage from './pages/Checkout'
import Footer from './component/Footer'
import Notes from './pages/Notes'
 
const App = () => {
  const {token , setToken} = useContext(UserContext);
  // localStorage.removeItem("token");
  useEffect(()=>{
    const tok = localStorage.getItem("token");
    setToken(tok);
  },[])
  return (
    <> 
      <Navbar />
      <div className="h-17.5" />
      
      <div className='h-[86%] fixed w-[99%] left-1/2 -translate-x-1/2 mt-3 overflow-auto flex flex-col md:flex-row md:justify-between gap-2'>
        {token && <Sidebar /> }
        <div className={`border-l border-l-white relative overflow-auto h-full ${token ? "w-full md:w-[84%] bg-brown-secondary rounded-xl  " : "w-full"} `}>
          <Routes>
            <Route path='/' element={token ? <Home /> : <NonLogin />} />
            {!token && <Route path='/login' element={<Login />} />}
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/plans' element={<Plans />} />
            <Route path='/checkout' element={<CheckoutPage /> }/>
            <Route path='/tutor' element={<Tutor />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/project/:projectId' element={<Project />} />
            <Route path='/project/:projectId/:notesId' element={<Notes />} />
            
          </Routes>

        </div>
      </div> 

      {/* <Footer /> */}
    
    </>

  )
}

export default App