import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/Actions/userActions";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const navigate = useNavigate(); // Use useNavigate for navigation
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error } = userLogin;

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password));
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      setShowSuccessMessage(true);
      navigate(redirect); // Redirect to the intended page after successful login
    }
  };

  return (
    <div className="container-fluid bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Your Logo
          </Link>
        </div>
      </nav>
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-md-8 col-lg-4">
          <div className="card shadow mt-5">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              {error && <p className="text-danger">{error}</p>}
              {showSuccessMessage && (
                <p className="text-success">Login successful!</p>
              )}
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
              <p className="mt-3 text-center">
                Don't have an account?{" "}
                <Link
                  to={redirect ? `/register?redirect=${redirect}` : "/register"}
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
