import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const userRoute = express.Router();
userRoute.use(express.json());
userRoute.use(cors());
dotenv.config();

const mongoUri = process.env.MONGO_URI;

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    ph_num: Number,
    address: String,
    city: String
});

const User = mongoose.model('User', userSchema);

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

    userRoute.post('/register', async (req, res) => {
        try {
            console.log('Request body:', req.body); // Log request body
            const { name, email, password, ph_num, address, city } = req.body;
    
            const newUser = new User({
                name: name,
                email: email,
                password: password,
                ph_num: ph_num,
                address: address,
                city: city,
            });
    
            const savedUser = await newUser.save();
            console.log('Saved user:', savedUser); // Log saved user
    
            res.status(201).json({ message: 'User registration successful', userId: savedUser._id });
        } catch (err) {
            console.error('Error during registration:', err); // Log error
            res.status(500).json({ error: err.message });
        }
    });
    
export default userRoute;
