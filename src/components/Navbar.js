import React from 'react';
import logo from '../assets/logo.png';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import './style/Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  const handleAbout = () => {
    navigate('/about');
  };

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div>
      {/* Navigation */}
      <header className='navbar'>
        <div className='logo-container'>
          <Avatar alt='logo' src={logo} sx={{ width: 55, height: 55 }} />
          <a href='/' className='title'>
            Fitness Nation
          </a>
        </div>
        <nav>
          <button
            type='button'
            role='link'
            onClick={handleHome}
            className='nav-link'
          >
            Home
          </button>
          <button
            type='button'
            role='link'
            onClick={handleAbout}
            className='nav-link'
          >
            About
          </button>
          <button
            type='button'
            role='link'
            onClick={handleContact}
            className='nav-link'
          >
            Contact
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
