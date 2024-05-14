import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import a CSS file for styling

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      alert("Please enter a destination");
      return;
    }
    navigate(`/search?key=${encodeURIComponent(searchQuery)}`);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div
      className="container-fluid homepage-background"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" 
      }}
    >
      
      <div className="container content-container">
        <div className="content">
          {/* Added welcome text with cursive font */}
          <h1 className="welcome-text">Welcome to Pakistan</h1>
          <h1 className="mb-5">Discover your next great adventure, become an explorer to get started!</h1>
          <form onSubmit={handleSubmit} className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for your destination"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
