import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../src/components/Header';

import './Trips.css';

const Trips = () => {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    return formatter.format(date);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log(userInfo)
    console.log(token)
    if (token && userInfo) {
      setIsLoggedIn(true);
      setUserId(userInfo.user._id); // Assuming user ID is stored as 'userId' in token
      setToken(token);
    }

    axios.get('http://localhost:8081/api/trips', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(async (response) => {
        const formattedTrips = await Promise.all(response.data.map(async (trip) => {
          const formattedTrip = {
            ...trip,
            date: formatDate(trip.date),
          };

          const userResponse = await axios.get(`http://localhost:8081/api/book/${trip.destination}/userID`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          formattedTrip.userId = userResponse.data.user_id;

          const tripResponse = await axios.get(`http://localhost:8081/api/book/${trip.destination}/tripID`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
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
  }, [token]);

  const handleBookTrip = async (tripId) => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    try {
      console.log(userId)
      const response = await axios.post('http://localhost:8081/api/book/bookings', {
        user_id: userId,
        trip_id: tripId,
         // Use the extracted user ID
        seats_booked: 1
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log("Booking response:", response);

      if (response.status === 201) {
        alert('Booking successful!');
      } else {
        console.error('Booking failed with status:', response.status);
        alert('Booking failed. Please try again later.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('Booking failed. Please try again later.');
    }
  };

  if (isLoading) {
    return <div>Loading trips...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          {trips.map((trip, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={trip.image.url}
                  alt={trip.image.alt}
                  className="card-img-top trips-img" /> {/* Added trips-img class */}
                <div className="card-body">
                  <h5 className="card-title">{trip.destination}</h5>
                  <p className="card-text">
                    <strong>Date:</strong> {trip.date}<br/>
                    <strong>Starting from:</strong> Rs. {trip.price} per person<br/>
                    <strong>ID:</strong> {trip._id}<br/>
                    <strong>User ID:</strong> {userId}
                  </p>
                </div>
                <div className="card-footer">
                  {isLoggedIn ? (
                    <button className="btn btn-primary w-100" onClick={() => handleBookTrip(trip._id)}>BOOK NOW</button>
                  ) : (
                    <button className="btn btn-secondary w-100" onClick={() => navigate('/login')}>Login to Book</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trips;
