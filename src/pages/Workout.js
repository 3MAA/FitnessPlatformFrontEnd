import React, { useState, useEffect } from 'react';
import '../pages/styles/Workout.css';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import { getWorkouts } from '../services/WorkoutService';
import { useNavigate } from 'react-router-dom'; // Folosim useNavigate

const Workout = () => {
  const [workouts, setWorkouts] = useState([]); // Lista completă de workout-uri
  const [filteredWorkouts, setFilteredWorkouts] = useState([]); // Lista filtrată de workout-uri
  const [isLoading, setIsLoading] = useState(true); // Indicator de încărcare
  const [workoutTypeFilter, setWorkoutTypeFilter] = useState(''); // Stare pentru filtrul de workoutType

  // Funcția pentru a schimba filtru workoutType
  const handleWorkoutTypeFilterChange = (event) => {
    setWorkoutTypeFilter(event.target.value); // Setăm tipul de workout ales
  };

  useEffect(() => {
    const fetchWorkouts = async () => {
      const data = await getWorkouts(); // Obținem workout-urile din backend
      setWorkouts(data); // Setăm workout-urile în starea principală
      setFilteredWorkouts(data); // Inițial, toate workout-urile sunt afișate
      setIsLoading(false); // Oprim indicatorul de încărcare
    };

    fetchWorkouts();
  }, []); // Aceasta se va executa o singură dată la montarea componentei

  // Filtrare workout-uri pe baza tipului ales
  useEffect(() => {
    if (workoutTypeFilter === '') {
      setFilteredWorkouts(workouts); // Dacă nu există filtru, arată toate workout-urile
    } else {
      setFilteredWorkouts(
        workouts.filter((workout) => workout.workoutType === workoutTypeFilter)
      ); // Filtrăm workout-urile
    }
  }, [workoutTypeFilter, workouts]); // Acesta va rula de fiecare dată când workoutTypeFilter se schimbă

  const handleSeeMore = (contentPath) => {
    // Navigăm către link-ul YouTube stocat în contentPath
    window.location.href = contentPath; // Redirecționează utilizatorul către link-ul din contentPath
  };

  if (isLoading) {
    return <div>Loading workouts...</div>; // Mesaj de loading
  }

  return (
    <div>
      <Navbar2 />
      <div className='workouts-container'>
        <div className='header-workouts'>
          <h1>Workouts</h1>
          <p>Explore a variety of exercises to suit your fitness goals.</p>
        </div>

        {/* Filtru pentru workoutType */}
        <div className='workouts-filter'>
          <label htmlFor='workoutType'>Filter by workout type: </label>
          <select
            id='workoutType'
            value={workoutTypeFilter}
            onChange={handleWorkoutTypeFilterChange}
          >
            <option value=''>All</option>
            <option value='Yoga'>Yoga</option>
            <option value='Cardio'>Cardio</option>
            <option value='Strength'>Strength</option>
          </select>
        </div>

        <div className='workouts-categories'>
          {filteredWorkouts.length === 0 ? (
            <p>No workouts found for this filter.</p>
          ) : (
            filteredWorkouts.map((workout, index) => (
              <div className='workout-card' key={index}>
                <h3>{workout.workoutDescription}</h3>
                <p>Difficulty: {workout.difficultyLevel}</p>
                <p>Duration: {workout.workoutDuration}</p>
                <p>Calories burned: {workout.caloriesBurned}</p>
                <button
                  className='see-more-btn'
                  onClick={() => handleSeeMore(workout.contentPath)} // Transmiterea link-ului video din contentPath
                >
                  See More
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Workout;
