import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login, logout } from "../Redux/Actions/userActions";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Your Logo
        </Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {isLoggedIn && (
            <button
              className="btn btn-danger ml-3"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  // Fetch userLogin from Redux store
  const userLogin = useSelector((state) => state.userLogin);
  const { error, userInfo } = userLogin;

  // Check if there is a token, if yes, user is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn && userInfo) {
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  // Submit login form
  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password));
    const isLoggedIn = localStorage.getItem("isLoggedIn");
  
    // Check if isLoggedIn is true and userInfo is available in localStorage
    if (isLoggedIn && localStorage.getItem('userInfo')) {
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      navigate(redirect);
    } else {
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  };

  // Handle logout
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <div className="container-fluid bg-light">
        <Navbar isLoggedIn={!!userInfo} handleLogout={handleLogout} />
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-4">
            <div className="card shadow mt-5">
              <div className="card-body">
                <h2 className="text-center mb-4">Login</h2>
                {error && showErrorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                {showSuccessMessage && (
                  <div className="alert alert-success" role="alert">
                    Login successful!
                  </div>
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
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Login
                  </button>
                </form>
                <p className="mt-3 text-center">
                  Don't have an account?{" "}
                  <Link
                    to={
                      redirect ? `/register?redirect=${redirect}` : "/register"
                    }
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
