import { useState, useEffect } from "react";

function Dashboard() {
  const [steps, setSteps] = useState(() => {
    return localStorage.getItem("steps") || "";
  });
  
  const [water, setWater] = useState(() => {
    return localStorage.getItem("water") || "";
  });

  useEffect(() => {
    localStorage.setItem("steps", steps);
    localStorage.setItem("water", water);
  }, [steps, water]);

  return (
    <div>
      <h1>Dashboard</h1>
  
      <h2>Daily Tracker</h2>

      <h3>Welcome back! 💪</h3>

      <p>Record your steps and daily water consumption</p>
      <input
        type="number"
        placeholder="Steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
      />
  
      <input
        type="number"
        placeholder="Water (cups)"
        value={water}
        onChange={(e) => setWater(e.target.value)}
      />

      <h2>Summary</h2>

      <p>Total Workouts: {JSON.parse(localStorage.getItem("workouts") || "[]").length}</p>

      <p>Current Weight: {localStorage.getItem("currentWeight") || "N/A"}</p>

      <h2>Workout Videos</h2>

      <iframe
        width="300"
        height="200"
        src="https://www.youtube.com/embed/UItWltVZZmE"
        title="Workout video"
      ></iframe>

      <iframe
        width="300"
        height="200"
        src="https://www.youtube.com/embed/ml6cT4AZdqI"
        title="Workout video"
      ></iframe>
    </div>
  );

}

export default Dashboard;