import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Trip from '../models/tripModel.js';
import Booking from '../models/bookModel.js';
import User from '../models/userModel.js'
import authMiddleware from '../middleware/authMiddleware.js'
const bookRoute = express.Router();
bookRoute.use(express.json());
bookRoute.use(cors());
dotenv.config();

const mongoUri = process.env.MONGO_URI;

// const tripSchema = new mongoose.Schema({
//     name: String,
//     destination: String,
//     price: Number,
//     date: Date,
//     description: String,
//     capacity: Number,
//     booked_seats: { type: Number, default: 0 }
//   });
//   const Trip = mongoose.model('Trip',tripSchema)

//fetching user id
bookRoute.get('/:destination/userID', async (req, res) => {
  try {
    // Fetch any user from the database
    const user = await User.findOne(); // Fetch any user, or use a default one
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Return the user's ID
    res.status(200).json({ user_id: user._id });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

bookRoute.get('/:destination/tripID', async (req, res) => {
  try {
    // Fetch any trip from the database
    const trip = await Trip.findOne(); // Fetch any trip, or use a default one
    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }
    // Return the trip ID
    res.status(200).json({ trip_id: trip._id });
  } catch (error) {
    console.error('Error fetching trip:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


// const extractUserId = (req) => {
//   const authorizationHeader = req.headers.authorization;
//   const token = authorizationHeader ? authorizationHeader.split(' ')[1] : null;
//   if (token) {
//     try {
//       const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//       console.log('Decoded Token:', decodedToken); // Log the decoded token
//       return decodedToken.userId;
//     } catch (error) {
//       console.error('Token Error:', error); // Log token decoding errors
//       return null; // Invalid token
//     }
//   }
//   console.log('No Token Provided'); // Log when no token is provided
//   return null; // No token provided
// };
// bookRoute.post('/bookings', authMiddleware, async (req, res) => {

bookRoute.post('/bookings', async (req, res) => {
  try {
    const { user_id,trip_id, seats_booked } = req.body; // Make sure property names are properly formatted
    const userId = user_id; // Extract user ID from the authenticated request
    console.log(trip_id,seats_booked,userId)
    
    // Find the trip
    const trip = await Trip.findById(trip_id);
    if (!trip) {
      return res.status(404).json({ error: 'Trip not found', tripId });
    }
    console.log(trip.price);

    // Check if enough seats available
    if (trip.capacity - trip.booked_seats < seats_booked) {
      return res.status(400).json({ error: 'Not enough seats available', trip_id });
    }

    // Calculate total price
    const totalPrice = trip.price * seats_booked;

    // Create new booking
    const booking = new Booking({
      trip: trip_id,
      user_id: userId,
      seats_booked : seats_booked,
      total_price : totalPrice
    });

    // Save booking
    await booking.save();

    // Update trip's booked seats
    trip.booked_seats += seats_booked;
    await trip.save();

    // Send success response with booking and message
    res.status(201).json({ booking, message: 'Booking successful' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

bookRoute.get('/all', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


bookRoute.delete('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Update trip's booked seats
    const trip = await Trip.findById(booking.trip);
    trip.booked_seats -= booking.seats_booked;
    await trip.save();

    await booking.deleteOne();
    res.json({ message: 'Booking deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
  export default bookRoute;