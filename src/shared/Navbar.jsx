import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <NavLink 
        to="/" 
        style={({ isActive }) => ({
          marginRight: "1rem",
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        Dashboard
      </NavLink>

      <NavLink 
        to="/workouts"
        style={({ isActive }) => ({
          marginRight: "1rem",
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        Workouts
      </NavLink>

      <NavLink 
        to="/progress"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        Progress
      </NavLink>
    </nav>
  );
}

export default Navbar;