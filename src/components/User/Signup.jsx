import { Link } from "react-router-dom";
import "./User.css";

const Signup = () => {
  return (
    <div className="login-container">
      <div className="signup-card">
        <h2 className="title-login">Sign up</h2>

        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" />

          <label htmlFor="confirmedPassword">Confirmed Password</label>
          <input type="password" name="confirmedPassword" />

          <button className="btn-login">Sign Up</button>
          <div className="register">
            Already register? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
