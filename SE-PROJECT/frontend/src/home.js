import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import a CSS file for styling

const Home = () => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [currentDestinationIndex, setCurrentDestinationIndex] = useState(0);

  useEffect(() => {
    // Fetch destinations from API
    const fetchDestinations = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/trips');
        if (!response.ok) {
          throw new Error('Failed to fetch destinations');
        }
        const data = await response.json();
        setDestinations(data); // Assuming data is an array of destination objects
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };
    fetchDestinations();
  }, [destinations]);

  useEffect(() => {
    // Automatically switch to the next destination after 5 seconds
    const interval = setInterval(() => {
      setCurrentDestinationIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 5000);
    //console.log(destinations[currentDestinationIndex].price)
    return () => clearInterval(interval);
  }, [destinations.length]);

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
        <div className="text-center text-lg-start">
          {/* Destination Highlights */}
          <div className="destination-highlights row justify-content-center"> {/* Center the row */}
            <h2 className="col-12 welcome-text">Popular Destinations</h2>
            <div className="row justify-content-center"> {/* Center the column */}
              {destinations.length > 0 && (
                <div className="col-lg-4 mb-4">
                  <div className="card card-fixed-size">
                    <img
                      src={destinations[currentDestinationIndex]?.image?.url}
                      className="card-img-top"
                      alt={destinations[currentDestinationIndex]?.image?.alt}
                    />
                    <div className="card-body">
                      <h5 className="card-title p-text text-center">{destinations[currentDestinationIndex]?.destination}</h5>
                      <p className="card-text p-text text-center">{destinations[currentDestinationIndex]?.price}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="call-to-action justify-content-center"> {/* Center the call-to-action horizontally */}
            <h2>Plan Your Trip</h2>
            <Link to="/plan" className="btn d-flex justify-content-center">Start Planning</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
