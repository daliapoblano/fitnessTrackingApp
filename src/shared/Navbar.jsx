import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? styles.active : ""}
        >
          Dashboard
        </NavLink>

        <NavLink 
          to="/workouts"
          className={({ isActive }) => isActive ? styles.active : ""}
        >
          Workouts
        </NavLink>

        <NavLink 
          to="/progress"
          className={({ isActive }) => isActive ? styles.active : ""}
        >
          Progress
        </NavLink>
      </div>

      <div className={styles.navCenter}>
        <h2>Fitness Tracker</h2>
      </div>

      <div className={styles.navRight}></div>
    </nav>
  );
}

export default Navbar;