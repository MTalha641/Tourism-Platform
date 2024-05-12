import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Trip from '../models/tripModel.js';
import Booking from '../models/bookModel.js';
import User from '../models/userModel.js'
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


bookRoute.post('/bookings', async (req, res) => {
    console.log('Request Body:', req.body); // Log the request body
    const { trip_id, user_id, seats_booked } = req.body;
  
    try {
      // Find the trip
      const trip = await Trip.findById(trip_id);
      if (!trip) {
        return res.status(404).json({ error: 'Trip not found', trip_id });
      }
  
      // Check if enough seats available
      if (trip.capacity - trip.booked_seats < seats_booked) {
        return res.status(400).json({ error: 'Not enough seats available', trip_id });
      }
  
      // Calculate total price
      const total_price = trip.price * seats_booked;
  
      // Create new booking
      const booking = new Booking({
        trip: trip_id,
        user_id,
        seats_booked,
        total_price
      });
  
      // Save booking
      await booking.save();
  
      // Update trip's booked seats
      trip.booked_seats += seats_booked;
      await trip.save();
  
      res.status(201).json(booking);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Server error' });
    }
});


  export default bookRoute;