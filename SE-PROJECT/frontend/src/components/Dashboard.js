// Dashboard.js
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

const Dashboard = () => {
  const user = useSelector((state) => state.userLogin.userInfo);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8 col-lg-10">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Dashboard</h2>
              {user && user.role === "admin" ? (
                <AdminDashboard />
              ) : (
                <UserDashboard/>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

