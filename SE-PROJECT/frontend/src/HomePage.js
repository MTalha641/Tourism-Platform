import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState()

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the search here
    console.log("Searching for:", keyword);
    if(keyword === "") alert("Incorrect Value")
    navigate(`/search?key=${keyword}`);
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
          {/* <select name="search" className='search' id="search" value={searchQuery} onChange={handleSearchChange}>
            <option value="" disabled selected>Search for your destination...</option>
            <option value="kashmir">Kashmir</option>
            <option value="hunza">Hunza</option>
            <option value="kpk">KPK</option>
          </select> */}
          <input type='search' 
          placeholder= "Search for your destination"
          onChange={(e) => setKeyword(e.target.value)}
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage; // Export the component
