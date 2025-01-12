import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages/styles/Contact.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='contact-container'>
        <section className='contact-hero'>
          <h1>Get in touch</h1>
          <p>
            We’d love to hear from you! Reach out to us with your questions,
            feedback, or suggestions.
          </p>
        </section>

        <section className='contact-info'>
          <h2>Contact information</h2>
          <div className='card-container'>
            <Card
              title='Email'
              description='info@fitnessnation.com'
              icon='📧'
            />
            <Card title='Phone' description='+1 (555) 123-4567' icon='📞' />
            <Card
              title='Address'
              description='123 Fitness Blvd, Healthy City, Fitland'
              icon='📍'
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
