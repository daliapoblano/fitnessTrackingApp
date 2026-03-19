import { useState } from "react";

function WorkoutForm({ addWorkout }) {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !reps || !sets) {
      alert("Please fill out all fields");
      return;
    }

    const newWorkout = {
      id: Date.now(),
      name,
      reps,
      sets,
    };

    addWorkout(newWorkout);

    // reset form
    setName("");
    setReps("");
    setSets("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Workout</h2>

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