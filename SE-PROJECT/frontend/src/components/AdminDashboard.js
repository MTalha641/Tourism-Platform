import React from 'react';

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      users: [],
      trips: [],
      selectedBooking: null,
      bookingDetails: null
    };
  }

  componentDidMount() {
    // Simulated fetch operations
    this.fetchBookings();
    this.fetchUsers();
    this.fetchTrips();
  }

  fetchBookings() {
    // Simulated bookings data
    const bookings = [
      { _id: "66413a31aefd00a47168cc45", trip: "66282808157a9f931be4e97c", user_id: "6636aff7f60c9d43b72c8f96", seats_booked: 1, total_price: 2999 },
      // Add more bookings if needed
    ];
    this.setState({ bookings });
  }

  fetchUsers() {
    // Simulated users data
    const users = [
      { id: 101, name: 'John Doe', email: 'john@example.com' },
      { id: 102, name: 'Jane Doe', email: 'jane@example.com' },
    ];
    this.setState({ users });
  }

  fetchTrips() {
    // Simulated trips data
    const trips = [
      { id: 201, destination: 'New York', date: '2024-05-20' },
      { id: 202, destination: 'Los Angeles', date: '2024-05-22' },
    ];
    this.setState({ trips });
  }

  handleDeleteBooking = (id) => {
    // Logic to delete booking with the given id
    console.log(`Deleting booking with id: ${id}`);
  }

  handleViewDetails = async () => {
    // Dummy API call to fetch all booking details
    try {
      const response = await fetch(`http://localhost:8081/api/book/all`);
      if (!response.ok) {
        throw new Error('Failed to fetch booking details');
      }
      const bookingDetails = await response.json();
      this.setState({ bookingDetails, selectedBooking: null });
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
                        <button className="btn btn-primary" onClick={this.handleViewDetails}>View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
            <section>
              <h2>User Details</h2>
              {/* Render user details here */}
            </section>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
            <section>
              <h2>Trip Details</h2>
              {/* Render trip details here */}
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
      </div>
    );
  }
}

export default AdminDashboard;
