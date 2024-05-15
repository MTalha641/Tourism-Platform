import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login, logout } from "../Redux/Actions/userActions";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ isLoggedIn, handleLogout, isAdmin }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
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
            <div>
              <button className="btn btn-danger ml-3" onClick={handleLogout}>
                Logout
              </button>
              {isAdmin && (
                <Link to="/admin-dashboard">
                  <button className="btn btn-primary ml-3">Admin Panel</button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = new URLSearchParams(location.search).get("redirect");

  // Fetch userLogin from Redux store
  const userLogin = useSelector((state) => state.userLogin);
  const { error, userInfo } = userLogin;

  // Submit login form
  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password, role));
    if (!error && userInfo) {
      if (redirect) {
        navigate(redirect);
      } else {
        if (userInfo.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      }
    } else {
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
        <Navbar isLoggedIn={!!userInfo} handleLogout={handleLogout} isAdmin={userInfo && userInfo.role === "admin"} />
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
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Role (admin or user)"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
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
                  Already have an account?{" "}
                  <Link
                    to="/login"
                  >
                    Login
                  </Link>
                </p>
                <p className="mt-3 text-center">
                  Don't have an account?{" "}
                  <Link
                    to={
                      redirect
                        ? `/register?redirect=${redirect}`
                        : "/register"
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
