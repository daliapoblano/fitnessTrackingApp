import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Workouts from "./pages/Workouts.jsx";
import Progress from "./pages/Progress.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/workouts" element={<Workouts />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;