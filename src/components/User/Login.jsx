import { Link } from "react-router-dom";
import "./User.css";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="title-login">Login</h2>

        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" />

          <button className="btn-login">Login</button>
          <div className="register">
            New to Productive? <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
