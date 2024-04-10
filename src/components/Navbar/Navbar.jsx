import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <h1 id="logo">
        <Link to="/">Productive</Link>
      </h1>
      <div className="nav-link">
        <Link id="login" to="/login">
          Login
        </Link>
        <Link id="signup" to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
