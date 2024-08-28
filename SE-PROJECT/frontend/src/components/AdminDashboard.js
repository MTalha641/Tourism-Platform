import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [trips, setTrips] = useState([]);
  const [users, setUsers] = useState([]);
  const [deleteBookingId, setDeleteBookingId] = useState('');
  const [deleteTripId, setDeleteTripId] = useState('');
  const [deleteUserId, setDeleteUserId] = useState('');
  const [bookingDetails, setBookingDetails] = useState(null);
  const [tripDetails, setTripDetails] = useState(null);
  const [userDetail, setUserDetail] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchBookings();
    fetchTrips();
    fetchUsers();
  }, [token]);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/book/all', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const fetchTrips = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/trips/all', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setTrips(response.data);
    } catch (error) {
      console.error('Error fetching trips:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/users/all', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDeleteBooking = async () => {
    if (!deleteBookingId) {
      alert('Please enter a booking ID');
      return;
    }
    try {
      const response = await fetch(`http://localhost:8081/api/book/${deleteBookingId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to delete booking');
      }
      setBookings(bookings.filter(booking => booking._id !== deleteBookingId));
      console.log(`Booking with id ${deleteBookingId} deleted successfully`);
      setDeleteBookingId('');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleDeleteTrip = async () => {
    if (!deleteTripId) {
      alert('Please enter a trip ID');
      return;
    }
    try {
      const response = await fetch(`http://localhost:8081/api/trips/${deleteTripId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to delete trip');
      }
      setTrips(trips.filter(trip => trip.id !== deleteTripId));
      console.log(`Trip with id ${deleteTripId} deleted successfully`);
      setDeleteTripId('');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleDeleteUser = async () => {
    if (!deleteUserId) {
      alert('Please enter a user ID');
      return;
    }
    try {
      const response = await fetch(`http://localhost:8081/api/users/${deleteUserId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      setUsers(users.filter(user => user.id !== deleteUserId));
      console.log(`User with id ${deleteUserId} deleted successfully`);
      setDeleteUserId('');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleViewBookingDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8081/api/book/all`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch booking details');
      }
      const data = await response.json();
      setBookingDetails(data);
      setTripDetails(null);
      setUserDetail(null);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleViewTripDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8081/api/trips/all`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch trip details');
      }
      const data = await response.json();
      setTripDetails(data);
      setBookingDetails(null);
      setUserDetail(null);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleViewUserDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8081/api/users/all`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      const data = await response.json();
      setUserDetail(data);
      setBookingDetails(null);
      setTripDetails(null);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <section>
            <h2>Booking Details</h2>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>User ID</th>
                  <th>Trip ID</th>
                  <th>Seats Booked</th>
                  <th>Total Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(booking => (
                  <tr key={booking._id}>
                    <td>{booking._id}</td>
                    <td>{booking.user_id}</td>
                    <td>{booking.trip}</td>
                    <td>{booking.seats_booked}</td>
                    <td>{booking.total_price}</td>
                    <td>
                      <button className="btn btn-danger mr-2" onClick={() => handleDeleteBooking(booking._id)}>Delete</button>
                      <button className="btn btn-primary" onClick={handleViewBookingDetails}>View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Booking ID to Delete"
                value={deleteBookingId}
                onChange={(e) => setDeleteBookingId(e.target.value)}
              />
              <button className="btn btn-danger mt-2" onClick={handleDeleteBooking}>Delete Booking</button>
            </div>
          </section>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <section>
            <h2>Trip Details</h2>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Destination</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {trips.map(trip => (
                  <tr key={trip.id}>
                    <td>{trip.id}</td>
                    <td>{trip.destination}</td>
                    <td>{trip.date}</td>
                    <td>{trip.price}</td>
                    <td>
                      <button className="btn btn-danger pd-4" onClick={() => handleDeleteTrip(trip.id)}>Delete</button>
                      <button className="btn btn-primary" onClick={handleViewTripDetails}>View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Trip ID to Delete"
                value={deleteTripId}
                onChange={(e) => setDeleteTripId(e.target.value)}
              />
              <button className="btn btn-danger mt-2" onClick={handleDeleteTrip}>Delete Trip</button>
            </div>
          </section>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <section>
            <h2>User Details</h2>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button className="btn btn-danger mr-2" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                      <button className="btn btn-primary" onClick={handleViewUserDetails}>View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter User ID to Delete"
                value={deleteUserId}
                onChange={(e) => setDeleteUserId(e.target.value)}
              />
              <button className="btn btn-danger mt-2" onClick={handleDeleteUser}>Delete User</button>
            </div>
          </section>
        </div>
      </div>

      {bookingDetails && (
        <div className="row mt-4">
          <div className="col">
            <section>
              <h2>All Booking Details</h2>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>User ID</th>
                    <th>Trip ID</th>
                    <th>Seats Booked</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {bookingDetails.map(booking => (
                    <tr key={booking._id}>
                      <td>{booking._id}</td>
                      <td>{booking.user_id}</td>
                      <td>{booking.trip}</td>
                      <td>{booking.seats_booked}</td>
                      <td>{booking.total_price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        </div>
      )}

      {tripDetails && (
        <div className="row mt-4">
          <div className="col">
            <section>
              <h2>All Trip Details</h2>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>Destination</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Booked Seats</th>
                  </tr>
                </thead>
                <tbody>
                  {tripDetails.map(trip => (
                    <tr key={trip.id}>
                      <td>{trip.id}</td>
                      <td>{trip.destination}</td>
                      <td>{trip.date}</td>
                      <td>{trip.price}</td>
                      <td>{trip.description}</td>
                      <td>{trip.booked_seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        </div>
      )}

      {userDetail && (
        <div className="row mt-4">
          <div className="col">
            <section>
              <h2>All User Details</h2>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{userDetail.id}</td>
                    <td>{userDetail.name}</td>
                    <td>{userDetail.email}</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
