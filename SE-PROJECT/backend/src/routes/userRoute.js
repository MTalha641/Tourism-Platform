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
        const { name, email, password, ph_num, address, city } = req.body;

        // Assuming 'users' is the name of your existing MongoDB collection
        // Inserting a new document into the existing 'users' collection
        const newUser = await mongoose.connection.db.collection('users').insertOne({
            name: name,
            email: email,
            password: password,
            ph_num: ph_num,
            address: address,
            city: city,
        });

        res.status(201).json({ message: 'User registration successful', userId: newUser.insertedId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default userRoute;
