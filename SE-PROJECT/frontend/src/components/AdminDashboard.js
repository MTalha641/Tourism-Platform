import React from 'react';

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      trips: [],
      users: [],
      selectedBooking: null,
      bookingDetails: null,
      tripDetails: null,
      userDetail: null,
      deleteBookingId: '',
      deleteTripId: '',
      deleteUserId: ''
    };
  }

  componentDidMount() {
    // Simulated fetch operations
    this.fetchBookings();
    this.fetchTrips();
    this.fetchUsers();
  }

  fetchBookings() {
    // Simulated bookings data
    const bookings = [
      { _id: "66413a31aefd00a47168cc45", trip: "66282808157a9f931be4e97c", user_id: "6636aff7f60c9d43b72c8f96", seats_booked: 1, total_price: 2999 },
      // Add more bookings if needed
    ];
    this.setState({ bookings });
  }

  fetchTrips() {
    // Simulated trips data
    const trips = [
      { id: "66282808157a9f931be4e97c", destination: 'New York', date: '2024-05-20', price: 3499 },
      { id: "66282808157a9f931be4e97d", destination: 'Hunza', date: '2023-06-20', price: 3499 },
      // Add more trips if needed
    ];
    this.setState({ trips });
  }

  fetchUsers() {
    // Simulated users data
    const users = [
      { id: 101, name: 'John Doe', email: 'john@example.com' },
      { id: 102, name: 'Jane Doe', email: 'jane@example.com' },
      // Add more users if needed
    ];
    this.setState({ users });
  }

  handleDeleteBooking = async () => {
    const { deleteBookingId } = this.state;
    if (!deleteBookingId) {
      alert('Please enter a booking ID');
      return;
    }
    try {
      const response = await fetch(`http://localhost:8081/api/book/${deleteBookingId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to delete booking');
      }
      const updatedBookings = this.state.bookings.filter(booking => booking._id !== deleteBookingId);
      this.setState({ bookings: updatedBookings });
      console.log(`Booking with id ${deleteBookingId} deleted successfully`);
      this.setState({ deleteBookingId: '' }); // Clear the input field after deletion
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  handleDeleteTrip = async () => {
    const { deleteTripId } = this.state;
    if (!deleteTripId) {
      alert('Please enter a trip ID');
      return;
    }
    try {
      const response = await fetch(`http://localhost:8081/api/trips/${deleteTripId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to delete trip');
      }
      const updatedTrips = this.state.trips.filter(trip => trip.id !== deleteTripId);
      this.setState({ trips: updatedTrips });
      console.log(`Trip with id ${deleteTripId} deleted successfully`);
      this.setState({ deleteTripId: '' }); // Clear the input field after deletion
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  handleDeleteUser = async () => {
    const { deleteUserId } = this.state;
    if (!deleteUserId) {
      alert('Please enter a user ID');
      return;
    }
    try {
      const response = await fetch(`http://localhost:8081/api/users/${deleteUserId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      const updatedUsers = this.state.users.filter(user => user.id !== deleteUserId);
      this.setState({ users: updatedUsers });
      console.log(`User with id ${deleteUserId} deleted successfully`);
      this.setState({ deleteUserId: '' }); // Clear the input field after deletion
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  handleViewBookingDetails = async () => {
    // Dummy API call to fetch all booking details
    try {
      const response = await fetch(`http://localhost:8081/api/book/all`);
      if (!response.ok) {
        throw new Error('Failed to fetch booking details');
      }
      const bookingDetails = await response.json();
      this.setState({ bookingDetails, tripDetails: null, userDetail: null });
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  handleViewTripDetails = async () => {
    // Dummy API call to fetch all trip details
    try {
      const response = await fetch(`http://localhost:8081/api/trips/all`);
      if (!response.ok) {
        throw new Error('Failed to fetch trip details');
      }
      const tripDetails = await response.json();
      this.setState({ tripDetails, bookingDetails: null, userDetail: null });
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  handleViewUserDetails = async () => {
    // Dummy API call to fetch all user details
    try {
      const response = await fetch(`http://localhost:8081/api/users/all`);
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      const userDetail = await response.json();
      this.setState({ userDetail, bookingDetails: null, tripDetails: null });
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  render() {
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
                  {this.state.bookings.map(booking => (
                    <tr key={booking._id}>
                      <td>{booking._id}</td>
                      <td>{booking.user_id}</td>
                      <td>{booking.trip}</td>
                      <td>{booking.seats_booked}</td>
                      <td>{booking.total_price}</td>
                      <td>
                        <button className="btn btn-danger mr-2" onClick={() => this.handleDeleteBooking(booking._id)}>Delete</button>
                        <button className="btn btn-primary" onClick={this.handleViewBookingDetails}>View Details</button>
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
                  value={this.state.deleteBookingId}
                  onChange={(e) => this.setState({ deleteBookingId: e.target.value })}
                />
                <button className="btn btn-danger mt-2" onClick={this.handleDeleteBooking}>Delete Booking</button>
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
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.trips.map(trip => (
                    <tr key={trip.id}>
                      <td>{trip.id}</td>
                      <td>
                        <button className="btn btn-danger mr-2" onClick={() => this.handleDeleteTrip(trip.id)}>Delete</button>
                        <button className="btn btn-primary" onClick={this.handleViewTripDetails}>View Details</button>
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
                  value={this.state.deleteTripId}
                  onChange={(e) => this.setState({ deleteTripId: e.target.value })}
                />
                <button className="btn btn-danger mt-2" onClick={this.handleDeleteTrip}>Delete Trip</button>
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
                  {this.state.users.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <button className="btn btn-danger mr-2" onClick={() => this.handleDeleteUser(user.id)}>Delete</button>
                        <button className="btn btn-primary" onClick={this.handleViewUserDetails}>View Details</button>
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
                  value={this.state.deleteUserId}
                  onChange={(e) => this.setState({ deleteUserId: e.target.value })}
                />
                <button className="btn btn-danger mt-2" onClick={this.handleDeleteUser}>Delete User</button>
              </div>
            </section>
          </div>
        </div>

        {this.state.bookingDetails && (
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
                    {this.state.bookingDetails.map(booking => (
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

        {this.state.tripDetails && (
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
                    {this.state.tripDetails.map(trip => (
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

        {this.state.userDetail && (
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
                      <td>{this.state.userDetail.id}</td>
                      <td>{this.state.userDetail.name}</td>
                      <td>{this.state.userDetail.email}</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AdminDashboard;
