import { useState, useEffect } from "react";

function WorkoutForm({ addWorkout,updateWorkout, editingWorkout }) {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");

  useEffect(() => {
    if (editingWorkout) {
      setName(editingWorkout.name);
      setSets(editingWorkout.sets);
      setReps(editingWorkout.reps);
    }
  }, [editingWorkout]);

  function handleSubmit(e) {
    e.preventDefault();
  
    const workout = {
      id: editingWorkout ? editingWorkout.id : Date.now(),
      name,
      sets,
      reps,
    };
  
    if (editingWorkout) {
      updateWorkout(workout);
    } else {
      addWorkout(workout);
    }
  
    // clearing the form
    setName("");
    setSets("");
    setReps("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Your Workout</h2>

      <input
        type="text"
        placeholder="Workout Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />

      <input
        type="number"
        placeholder="Sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default WorkoutForm;