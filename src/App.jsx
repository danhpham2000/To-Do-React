import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import ToDoCard from "./components/ToDo/ToDoCard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<ToDoCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
