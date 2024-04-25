import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [maxDate, setMaxDate] = useState("");
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

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    // Construct filter query and navigate to search page
    const filterQuery = `minPrice=${minPrice}&maxPrice=${maxPrice}&maxDate=${maxDate}`;
    navigate(`/search?key=${encodeURIComponent(searchQuery)}&${filterQuery}`);
  };

  return (
    <div className="home-page">
      <nav className="navbar">
        <ul>
          <li><Link to="/trips">Trips</Link></li>
          <li><Link to="/explore-pakistan">Explore Pakistan</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
      <div className="content">
        <h1>Discover your next great adventure, become an explorer to get started!</h1>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type='search'
            placeholder="Search for your destination"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
        <div className="filter-options">
          <form onSubmit={handleFilterSubmit}>
            {/* <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            /> */}
            <input
              type="date"
              value={maxDate}
              onChange={(e) => setMaxDate(e.target.value)}
            />
            <button type="submit">Apply Filters</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
