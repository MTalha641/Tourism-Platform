import React from 'react';
import { Link } from 'react-router-dom';
import LakesSection from './LakesSection'; // Import LakesSection component
import './ExplorePakistan.css';
import Header from '../src/components/Header';
import HillStations from './HillStations';
import Valleys from './Valleys';
import Beaches from './Beaches';

const ExplorePakistan = () => {
  return (
    <>
    <div className="explore-pakistan">
      {/* Bootstrap Navbar */}
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><Link className="nav-link" to="/explore-pakistan#lakes">Lakes</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/explore-pakistan#hill-stations">Hill Stations</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/explore-pakistan#valleys">Valleys</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/explore-pakistan#beaches">Beaches</Link></li>
            </ul>
          </div>
        </div>
      </nav> */}
      <Header/>
      <div className="container">
        <h2 className="mt-4">Explore Pakistan</h2>

        <div className="destination-categories">
          <h3 id="lakes">Lakes</h3>
          <LakesSection />
          <HillStations/>
          <Valleys/>
          <Beaches/>

        </div>
      </div>
    </div>
    </>
  );
};

export default ExplorePakistan;
