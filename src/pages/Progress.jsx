import { useState, useEffect } from "react";
import styles from "./Progress.module.css"; 

function Progress() {
  const [startingWeight, setStartingWeight] = useState(() => {
    return localStorage.getItem("startingWeight") || "";
  });

  const [currentWeight, setCurrentWeight] = useState(() => {
    return localStorage.getItem("currentWeight") || "";
  });

  const [goalWeight, setGoalWeight] = useState(() => {
    return localStorage.getItem("goalWeight") || "";
  });

  useEffect(() => {
    localStorage.setItem("startingWeight", startingWeight);
    localStorage.setItem("currentWeight", currentWeight);
    localStorage.setItem("goalWeight", goalWeight);
  }, [startingWeight, currentWeight, goalWeight]);

  const lost =
    startingWeight && currentWeight
      ? startingWeight - currentWeight
      : 0;

  const remaining =
    currentWeight && goalWeight
      ? currentWeight - goalWeight
      : 0;

  return (
    <div className={styles.container}>
      <h1>Progress Page</h1>
      <h2>Track your progress</h2>
      <p>Tracking your progress is essential on your fitness journey! In this form you will share your goals and watch as you achieve them week by week!</p>

      <label htmlFor="startingWeight">Starting Weight</label>
      <input
        id="startingWeight"
        type="number"
        value={startingWeight}
        onChange={(e) => setStartingWeight(e.target.value)}
      />

      <label htmlFor="currentWeight">Current Weight</label>
      <input
         id="currentWeight"
         type="number"
         value={currentWeight}
         onChange={(e) => setCurrentWeight(e.target.value)}
      />

      <label htmlFor="goalWeight">Goal Weight</label>
      <input
        id="goalWeight"
        type="number"
        value={goalWeight}
        onChange={(e) => setGoalWeight(e.target.value)}
      />

      <h3>You’ve lost: {lost} lbs</h3>
      <h3>Remaining: {remaining} lbs</h3>
      {lost > 0 && <p>🔥 Keep going! You're making progress!</p>}
    </div>
  );
}

export default Progress;