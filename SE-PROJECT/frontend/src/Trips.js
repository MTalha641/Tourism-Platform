import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Trips.css';

const Trips = () => {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    return formatter.format(date);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token:', token);

    if (token) {
      axios.get('http://localhost:8081/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setIsLoggedIn(true);
        setUserId(response.data._id);
      })
      .catch(error => {
        console.error('Error fetching user ID:', error);
      });
    }

    axios.get('http://localhost:8081/api/trips')
      .then(async (response) => {
        const formattedTrips = await Promise.all(response.data.map(async (trip) => {
          const formattedTrip = {
            ...trip,
            date: formatDate(trip.date),
          };

          const userResponse = await axios.get(`http://localhost:8081/api/book/${trip.destination}/userID`);
          formattedTrip.userId = userResponse.data.user_id;

          const tripResponse = await axios.get(`http://localhost:8081/api/book/${trip.destination}/tripID`);
          formattedTrip.tripId = tripResponse.data.trip_id;

          return formattedTrip;
        }));

        setTrips(formattedTrips);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const handleBookTrip = async (tripId) => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    if (!userId) {
      console.error("User ID not available");
      return;
    }

    try {
      await axios.post('http://localhost:8081/api/book/bookings', {
        trip_id: tripId,
        user_id: userId,
        seats_booked: 1
      });
      alert('Booking successful!');
    } catch (error) {
      console.error('Booking error:', error);
    }
  };

  if (isLoading) {
    return <div>Loading trips...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="trips-container">
      {trips.map((trip, index) => (
        <div key={index} className="trip-card">
          <div className="trip-image-section">
            <img
              src={trip.image.url}
              alt={trip.image.alt}
              className="trip-image"
            />
          </div>
          <div className="trip-details-section">
            <h2>{trip.destination}</h2>
            <div className="trip-details">
              <span><strong>Date:</strong> {trip.date}</span>
              <span><strong>Starting from:</strong> Rs. {trip.price} per person</span>
              <span><strong>ID:</strong> {trip._id}</span>
            </div>
            <div className="booking-section">
              {isLoggedIn && userId ? (
                <button className="book-now" onClick={() => handleBookTrip(trip.tripId)}>BOOK NOW</button>
              ) : (
                <button onClick={() => navigate('/login')}>Login to Book</button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trips;
