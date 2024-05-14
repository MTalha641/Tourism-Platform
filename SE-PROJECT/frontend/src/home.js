import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import a CSS file for styling

const Home = () => {
  const navigate = useNavigate();


  return (
    <div className="container-fluid homepage-background">
      {/* Background image */}
      <h1 className="welcome-text display-4">Welcome to Pakistan</h1>
          <h1 className="mb-5">Discover your next great adventure, become an explorer to get started!</h1>
      <img
        className="background-image img-fluid"
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Pakistan Tourism"
      />

      <div className="container content-container">
        <div className="content text-center text-lg-start">
          
          {/* Destination Highlights */}
          <div className="destination-highlights row">
            <h2 className="col-12 welcome-text">Popular Destinations</h2>
            <div className="destination-card col-lg-4 mb-4">
              <img className="img-fluid" src="destination-image-1.jpg" alt="Destination 1" />
              <h3>Destination 1</h3>
              <p className="card-text p-text">Description of destination 1.</p>
            </div>
            <div className="destination-card col-lg-4 mb-4">
              <img className="img-fluid" src="destination-image-2.jpg" alt="Destination 2" />
              <h3>Destination 2</h3>
              <p className="card-text p-text">Description of destination 2.</p>
            </div>
            {/* Add more destination cards as needed */}
          </div>
          
          {/* Call to Action */}
          <div className="call-to-action">
            <h2>Plan Your Trip</h2>
            <Link to="/plan" className="btn btn-primary">Start Planning</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
