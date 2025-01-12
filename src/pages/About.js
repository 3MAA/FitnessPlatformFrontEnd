import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages/styles/About.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='about-container'>
        <section className='about-hero'>
          <h1>Our mission</h1>
          <p>
            At Fitness Nation, our mission is to empower individuals to achieve
            their fitness goals through expert coaching, state-of-the-art
            facilities, and a supportive community.
          </p>
        </section>

        <section className='values-section'>
          <h2>Our values</h2>
          <div className='card-container'>
            <Card
              title='Excellence'
              description='We strive for the highest standards in everything we do.'
              icon='🏆'
            />
            <Card
              title='Community'
              description='Building a supportive environment for everyone.'
              icon='🤝'
            />
            <Card
              title='Innovation'
              description='Leveraging the latest technologies and trends in fitness.'
              icon='💡'
            />
          </div>
        </section>

        <section className='team-section'>
          <h2>Meet the team</h2>
          <div className='card-container'>
            <Card
              title='John Doe'
              description='Founder & Head Coach'
              icon='👨‍🏫'
            />
            <Card title='Jane Smith' description='Nutritionist' icon='🥗' />
            <Card
              title='Alex Johnson'
              description='Personal Trainer'
              icon='🏋️‍♂️'
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
