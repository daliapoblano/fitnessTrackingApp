import { useState, useEffect } from "react";
import { useCallback } from "react";
import WorkoutForm from "../features/WorkoutForm.jsx";
import styles from "./Workouts.module.css"; 

function Workouts() {
  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem("workouts");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingWorkout, setEditingWorkout] = useState(null);

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = useCallback((workout) => {
    setWorkouts(prev => [...prev, workout]);
  }, [setWorkouts]);

  function deleteWorkout(id) {
    const updated = workouts.filter((w) => w.id !== id);
    setWorkouts(updated);
  }

  function updateWorkout(updatedWorkout) {
    const updatedList = workouts.map((w) =>
      w.id === updatedWorkout.id ? updatedWorkout : w
    );
    setWorkouts(updatedList);
    setEditingWorkout(null); 
  }

  return (
    <div className={styles.container}>
      <h1>Workouts Log</h1>

      <WorkoutForm 
        addWorkout={addWorkout} 
        updateWorkout={updateWorkout}
        editingWorkout={editingWorkout}
      />

      <ul>
        {workouts.map((w) => (
          <li key={w.id}>
            {w.name} - {w.sets} sets x {w.reps} reps
            <button onClick={() => deleteWorkout(w.id)}>Delete</button>
            <button onClick={() => setEditingWorkout(w)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;