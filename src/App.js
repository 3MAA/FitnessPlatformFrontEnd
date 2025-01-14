import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Subscription from './pages/Subscription';
import Workout from './pages/Workout';
import Plan from './pages/Plan';
import Goal from './pages/Goal';

import { jwtDecode } from 'jwt-decode';

function App() {
  const hasAccessToken = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (
      accessToken !== null &&
      accessToken !== undefined &&
      accessToken.length > 0
    ) {
      const decoded = jwtDecode(accessToken);
      const role =
        decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      const email =
        decoded[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
        ];
      const name =
        decoded[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
        ];
      console.log(role, email, name);
      return true;
    } else {
      return false;
    }
  };
  const getUser = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (
      accessToken !== null &&
      accessToken !== undefined &&
      accessToken.length > 0
    ) {
      const decoded = jwtDecode(accessToken);
      const role =
        decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      const email =
        decoded[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
        ];
      const name =
        decoded[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
        ];
      console.log(role, email, name);
      return {
        role: role,
        email: email,
        name: name,
      };
    } else {
      return null;
    }
  };
  const isOnLoginPage = () => {
    if (
      window.location.pathname !== '/login' &&
      window.location.pathname !== '/register'
    ) {
      return true;
    }
    return false;
  };
  return (
    <div className='app-container'>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home admin={hasAccessToken()} />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/subscription' element={<Subscription />} />
            <Route path='/workout' element={<Workout />} />
            <Route path='/plan' element={<Plan />} />
            <Route path='/goal' element={<Goal />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
