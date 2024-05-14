import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    ph_num: Number,
    address: String,
    city: String,
    role: String
});

const User = mongoose.model('User', userSchema);

export default User