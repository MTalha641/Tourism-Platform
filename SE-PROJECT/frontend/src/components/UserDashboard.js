// UserDashboard.js
import React from "react";

const UserDashboard = () => {
  return (
    <div>
      <h3>Welcome to User Dashboard</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Your Orders</h5>
              <p className="card-text">You have 10 orders</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Your Profile</h5>
              <p className="card-text">Update your profile details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
