// import React from 'react';
// import './Trips.css'; // Importing the CSS file for styles

// const Trips = () => {
//   return (
//     <div className="trips-container">
//       {/* Neelum Valley Trip */}
//       <div className="trip-card">
//         <div className="trip-image-section">
//           <img
//             src="https://www.getout.pk/wp-content/uploads/2021/04/Trip-to-Neelam-Valley.jpg"
//             alt="Neelum Valley"
//             className="trip-image"
//           />
//         </div>
//         <div className="trip-details-section">
//           <h2>3 Days Trip to Neelum Valley</h2>
//           <div className="trip-details">
//             <span><strong>Date:</strong> December 7, 2023</span>
//             <span><strong>Duration:</strong> 3 Days, 2 Nights</span>
//             <span><strong>Starting from:</strong> Rs. 14,000 per person</span>
//           </div>
//           <div className="trip-info">
//             <p><strong>Starting Location:</strong> Lahore</p>
//             <p><strong>Locations Included:</strong> Keran, Sharda, Kel, Neelum Valley</p>
//             <p><strong>Activities Included:</strong> Mountaineering / Sightseeing</p>
//           </div>
//           <div className="booking-section">
//             <button className="book-now">BOOK NOW</button> {/* Using the same class */}
//           </div>
//         </div>
//       </div>

//       {/* Ormara Beach Trip */}
//       <div className="trip-card"> {/* Same structure, but for Ormara Beach */}
//         <div className="trip-image-section">
//           <img
//             src="https://www.getout.pk/wp-content/uploads/2021/11/Trip-To-Ormara-Beach.jpg" // Add Ormara Beach image URL
//             alt="Ormara Beach"
//             className="trip-image"
//           />
//         </div>
//         <div className="trip-details-section">
//           <h2>Trip to Ormara Beach</h2>
//           <div className="trip-details">
//             <span><strong>Date:</strong> November 26, 2022</span>
//             <span><strong>Duration:</strong> 2 Days, 1 Night</span>
//             <span><strong>Starting from:</strong> Rs. 9,000 per person</span>
//           </div>
//           <div className="trip-info">
//             <p><strong>Starting Location:</strong> Karachi</p>
//             <p><strong>Locations Included:</strong> Kund Malir, Ormara, Makran Coastal Highway</p>
//             <p><strong>Activities Included:</strong> Beach</p>
//           </div>
//           <div className="booking-section">
//             <button className="book-now">BOOK NOW</button> {/* Also uses book-now class */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trips;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Trips.css'; // Importing the CSS file for styles

const Trips = () => {
  const [trips, setTrips] = useState([]); // State to hold trips data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const formatDate = (dateString) => {
    // Format the date string to a more readable format
    const date = new Date(dateString); // Convert to Date object
    const formatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }); // UK format
    return formatter.format(date); // Format the date
  };
  useEffect(() => {
    // Fetch data from the API
    axios
      .get('http://localhost:8081/api/trips') // Replace with your API endpoint
      .then((response) => {
        const formattedTrips = response.data.map((trip) => ({
          ...trip,
          date: formatDate(trip.date), // Format the date
        }))
        setTrips(formattedTrips); // Store the data in state
        setIsLoading(false); // Loading complete
      })
      .catch((err) => {
        setError(err.message); // Handle errors
        setIsLoading(false); // Loading complete even if there's an error
      });
  }, []); // Empty dependency array ensures this effect runs only once when the component is mounted

  if (isLoading) {
    return <div>Loading trips...</div>; // Display a loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if there's a problem
  }

  return (
    <div className="trips-container">
      {trips.map((trip, index) => ( // Map over the trips array to create trip cards
        <div key={index} className="trip-card">
          <div className="trip-image-section">
            <img
              src={trip.image.url} // Use image URL from API
              alt={trip.image.alt} // Use trip title for alt text
              className="trip-image"
            />
          </div>
          <div className="trip-details-section">
            <h2>{trip.destination}</h2> {/* Display trip title */}
            <div className="trip-details">
              <span><strong>Date:</strong> {trip.date}</span>
              {/* <span><strong>Duration:</strong> {trip.duration}</span> */}
              <span><strong>Starting from:</strong> Rs. {trip.price} per person</span>
            </div>
            {/* <div className="trip-info">
              <p><strong>Starting Location:</strong> {trip.startingLocation}</p>
              <p><strong>Locations Included:</strong> {trip.locations}</p>
              <p><strong>Activities Included:</strong> {trip.activities}</p>
            </div> */}
            <div className="booking-section">
              <button className="book-now">BOOK NOW</button> {/* Reuse book-now class */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trips;
