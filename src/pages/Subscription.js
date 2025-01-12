import React from 'react';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import '../pages/styles/Subscription.css';

const Subscription = () => {
  const handleSubscribe = (plan) => {
    // Poți implementa aici logica pentru procesul de abonare
    console.log(`You subscribed to the ${plan} plan.`);
  };

  return (
    <div>
      <Navbar2 />

      <div className='subscriptions-container'>
        <div className='header-subscriptions'>
          <h1>Choose Your Plan</h1>
          <p>Select a subscription plan that suits your needs.</p>
        </div>

        <div className='plans-container'>
          <div className='plan-card'>
            <h2>Basic Plan</h2>
            <p className='plan-price'>$10/month</p>
            <p className='plan-description'>
              A basic plan with limited features for casual users.
            </p>
            <button
              onClick={() => handleSubscribe('Basic')}
              className='subscribe-button'
            >
              Subscribe
            </button>
          </div>

          <div className='plan-card'>
            <h2>Standard Plan</h2>
            <p className='plan-price'>$20/month</p>
            <p className='plan-description'>
              A standard plan with more features for active users.
            </p>
            <button
              onClick={() => handleSubscribe('Standard')}
              className='subscribe-button'
            >
              Subscribe
            </button>
          </div>

          <div className='plan-card'>
            <h2>Premium Plan</h2>
            <p className='plan-price'>$30/month</p>
            <p className='plan-description'>
              A premium plan with full access to all features.
            </p>
            <button
              onClick={() => handleSubscribe('Premium')}
              className='subscribe-button'
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Subscription;
