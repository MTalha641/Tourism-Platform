import React from 'react';
import './Trips.css'; // Importing the CSS file for styles

const Trips = () => {
  return (
    <div className="trips-container">
      {/* Neelum Valley Trip */}
      <div className="trip-card">
        <div className="trip-image-section">
          <img
            src="https://www.getout.pk/wp-content/uploads/2021/04/Trip-to-Neelam-Valley.jpg"
            alt="Neelum Valley"
            className="trip-image"
          />
        </div>
        <div className="trip-details-section">
          <h2>3 Days Trip to Neelum Valley</h2>
          <div className="trip-details">
            <span><strong>Date:</strong> December 7, 2023</span>
            <span><strong>Duration:</strong> 3 Days, 2 Nights</span>
            <span><strong>Starting from:</strong> Rs. 14,000 per person</span>
          </div>
          <div className="trip-info">
            <p><strong>Starting Location:</strong> Lahore</p>
            <p><strong>Locations Included:</strong> Keran, Sharda, Kel, Neelum Valley</p>
            <p><strong>Activities Included:</strong> Mountaineering / Sightseeing</p>
          </div>
          <div className="booking-section">
            <button className="book-now">BOOK NOW</button> {/* Using the same class */}
          </div>
        </div>
      </div>

      {/* Ormara Beach Trip */}
      <div className="trip-card"> {/* Same structure, but for Ormara Beach */}
        <div className="trip-image-section">
          <img
            src="https://www.getout.pk/wp-content/uploads/2021/11/Trip-To-Ormara-Beach.jpg" // Add Ormara Beach image URL
            alt="Ormara Beach"
            className="trip-image"
          />
        </div>
        <div className="trip-details-section">
          <h2>Trip to Ormara Beach</h2>
          <div className="trip-details">
            <span><strong>Date:</strong> November 26, 2022</span>
            <span><strong>Duration:</strong> 2 Days, 1 Night</span>
            <span><strong>Starting from:</strong> Rs. 9,000 per person</span>
          </div>
          <div className="trip-info">
            <p><strong>Starting Location:</strong> Karachi</p>
            <p><strong>Locations Included:</strong> Kund Malir, Ormara, Makran Coastal Highway</p>
            <p><strong>Activities Included:</strong> Beach</p>
          </div>
          <div className="booking-section">
            <button className="book-now">BOOK NOW</button> {/* Also uses book-now class */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trips;
