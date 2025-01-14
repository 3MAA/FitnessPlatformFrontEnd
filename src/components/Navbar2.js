import React from 'react';
import logo from '../assets/logo.png';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import './style/Navbar2.css';

function Navbar2() {
  const navigate = useNavigate();

  const handleSubscriptions = () => {
    navigate('/subscription');
  };

  const handleWorkouts = () => {
    navigate('/workout');
  };

  const handlePlans = () => {
    navigate('/plan');
  };

  const handleGoals = () => {
    navigate('/goal');
  };

  const handleLogout = () => {
    navigate('/');
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
            onClick={handleSubscriptions}
            className='nav-link'
          >
            Subscriptions
          </button>
          <button
            type='button'
            role='link'
            onClick={handleWorkouts}
            className='nav-link'
          >
            Workouts
          </button>
          <button
            type='button'
            role='link'
            onClick={handlePlans}
            className='nav-link'
          >
            Plans
          </button>
          <button
            type='button'
            role='link'
            onClick={handleGoals}
            className='nav-link'
          >
            Goals
          </button>
          <button
            type='button'
            role='link'
            onClick={handleLogout}
            className='nav-link'
          >
            Logout
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Navbar2;
