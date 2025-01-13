export const getWorkouts = async () => {
  try {
    const response = await fetch('https://localhost:7087/api/workout');

    if (!response.ok) {
      throw new Error('Failed to fetch workouts');
    }

    const data = await response.json();

    console.log('Fetched workouts:', data);
    const filteredData = data.map(({ workoutId, ...rest }) => rest);

    return filteredData;
  } catch (error) {
    console.error('Error fetching workouts:', error);
    return [];
  }
};
