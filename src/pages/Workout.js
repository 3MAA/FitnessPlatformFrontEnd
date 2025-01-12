import React from 'react';
import '../pages/styles/Workout.css';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';

const Workouts = () => {
  const workouts = [
    {
      category: 'Cardio',
      items: ['Running', 'Cycling', 'Jump Rope', 'Rowing', 'Stair Climbing'],
    },
    {
      category: 'Strength',
      items: [
        'Weight Lifting',
        'Bodyweight Exercises',
        'Resistance Bands',
        'Deadlifts',
        'Bench Press',
      ],
    },
    {
      category: 'Yoga',
      items: [
        'Hatha Yoga',
        'Vinyasa Yoga',
        'Power Yoga',
        'Yin Yoga',
        'Restorative Yoga',
      ],
    },
    {
      category: 'HIIT',
      items: [
        'Burpees',
        'Mountain Climbers',
        'High Knees',
        'Jump Squats',
        'Plank Jacks',
      ],
    },
    {
      category: 'Flexibility',
      items: [
        'Hamstring Stretches',
        'Hip Openers',
        'Shoulder Rolls',
        'Cat-Cow',
        'Butterfly Stretch',
      ],
    },
  ];

  return (
    <div>
      <Navbar2 />

      <div className='workouts-container'>
        <div className='header-workouts'>
          <h1>Workouts</h1>
          <p>Explore a variety of exercises to suit your fitness goals.</p>
        </div>

        <div className='workouts-categories'>
          {workouts.map((workout, index) => (
            <div className='workout-card' key={index}>
              <h2>{workout.category}</h2>
              <ul>
                {workout.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Workouts;
