import { useState, useEffect } from "react";
import WorkoutForm from "../features/WorkoutForm.jsx";

function Workouts() {
  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem("workouts");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  function addWorkout(workout) {
    setWorkouts([...workouts, workout]);
  }

  function deleteWorkout(id) {
    const updated = workouts.filter((w) => w.id !== id);
    setWorkouts(updated);
  }

  return (
    <div>
      <h1>Workouts Page</h1>

      <WorkoutForm addWorkout={addWorkout} />

      <ul>
        {workouts.map((w) => (
          <li key={w.id}>
            {w.name} - {w.sets} sets x {w.reps} reps
            <button onClick={() => deleteWorkout(w.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;