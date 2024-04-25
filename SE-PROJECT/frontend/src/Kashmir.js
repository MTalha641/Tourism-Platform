import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Kashmir.css';

const Kashmir = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(`http://localhost:8081/api/trips/search?destination=Kashmir`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setLocations(data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to fetch data");
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className="">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/trips">Trips</Link></li>
          <li><Link to="/explore-pakistan">Explore Pakistan</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
      <h2>Kashmir Lakes</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="destination-categories">
          <div className="location-cards">
            {locations.map((location, index) => (
              <div key={index} className="location-card">
                <img
                  alt={location.image.alt}
                  src={location.image.url}
                  width="300"
                  height="300"
                />
                <div className="description">
                  <div className="space-y-1">
                    <h3>{location.title}</h3>
                    <p>{location.description}</p>
                  </div>
                </div>
                <div className="pricing">
                  <h3>
                    <span className="text-primary">Rs. {location.price}</span> per person
                  </h3>
                  <p>Departs {new Date(location.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Kashmir;
