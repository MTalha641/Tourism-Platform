import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    trip: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    seats_booked: { type: Number, required: true },
    total_price: { type: Number, required: true },
    // Other fields you might need
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
