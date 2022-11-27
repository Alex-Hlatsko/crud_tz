import React from 'react'
import AuthCompany from './pages/Auth/AuthCompany'
import AuthSeller from './pages/Auth/AuthSeller'
import {Routes, Route, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './pages/Home/Home';
import Decide from './pages/Decide/Decide';

const App = () => {
  const user = useSelector((state) => state.AuthReducer.authData)
  return (
    <>
      <Routes>
        <Route path='/' element={user ? <Navigate to="home"/> : <Navigate to='decide'/>} />
        <Route path='/decide' element={user ? <Navigate to='../home' /> : <Decide />} />
        <Route path='/home' element={user ? <Home /> : <Navigate to='../auth' />} />
        <Route path='/authcompany' element={user ? <Navigate to='../home' /> : <AuthCompany />} />
        <Route path='/authseller' element={user ? <Navigate to='../home' /> : <AuthSeller />} />
      </Routes>
    </>
  )
}

export default App