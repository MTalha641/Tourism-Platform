import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Trip from '../models/tripModel.js';
import Booking from '../models/bookModel.js';
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




bookRoute.post('/bookings', async (req, res) => {
    console.log('Request Body:', req.body); // Log the request body
    const { _id, _id, seats_booked } = req.body;
  
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