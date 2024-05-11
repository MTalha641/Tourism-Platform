// tripModel.js

import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
    name: String,
    destination: String,
    price: Number,
    date: Date,
    description: String,
    capacity: Number,
    booked_seats: { type: Number, default: 0 }
});

const Trip = mongoose.model('Trip', tripSchema);

export default Trip;
