import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
      className="container-fluid homepage-background" // Added a class for the background image
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1522312346375-d5f1a75f39e7')" // Corrected the image URL
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Tourism Platform</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/trips">Trips</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/explore-pakistan">Explore Pakistan</Link>
              </li>
            </ul>
            <Link className="btn btn-outline-primary me-2" to="/register">Register</Link>
          </div>
        </div>
      </nav>
      <div className="container content-container">
        <div className="content">
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
