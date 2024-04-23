import React from 'react';
import { Link } from 'react-router-dom';
import LakesSection from './LakesSection'; // Import LakesSection component
import './ExplorePakistan.css';

const ExplorePakistan = () => {
  return (
    <>
    <div className="explore-pakistan">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/explore-pakistan#lakes">Lakes</Link></li>
          <li><Link to="/explore-pakistan#hill-stations">Hill Stations</Link></li>
          <li><Link to="/explore-pakistan#valleys">Valleys</Link></li>
          <li><Link to="/explore-pakistan#beaches">Beaches</Link></li>
        </ul>
      </nav>
      <h2>Explore Pakistan</h2>
      <div className="destination-categories">
        <h3 id="lakes">Lakes</h3>
        <LakesSection />
      </div>
    </div>
    </>
  );
};

export default ExplorePakistan;
