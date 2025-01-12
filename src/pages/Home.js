import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import '../pages/styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate('/login');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className='hero-section'>
        <div className='hero-content'>
          <h1 className='hero-title'>Unleash Your Potential</h1>
          <p className='hero-subtitle'>
            Join the fitness revolution. Personalized workouts and expert
            coaching await you.
          </p>
          <div className='button-container'>
            <button className='primary-button' onClick={handleJoinNow}>
              Join Now
            </button>
            <button className='secondary-button' onClick={handleLearnMore}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
