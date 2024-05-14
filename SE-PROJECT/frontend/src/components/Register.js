import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { register } from "../Redux/Actions/userActions";

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ph_num, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState(""); // Default to "user"

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password, ph_num, address, city, role));
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8 col-lg-4">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password (Min. 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Phone Number"
              value={ph_num}
              onChange={(e) => setPhoneNum(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Role (admin or user)"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />

            <button type="submit" className="btn btn-primary btn-block">
              Register
            </button>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            <p className="mt-3 text-center">
              Already have an account?{" "}
              <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
