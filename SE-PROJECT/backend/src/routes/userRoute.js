import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import authMiddleware from '../middleware/authMiddleware.js';
const userRoute = express.Router();
userRoute.use(express.json());
userRoute.use(cors());
dotenv.config();

const mongoUri = process.env.MONGO_URI;

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
//     ph_num: Number,
//     address: String,
//     city: String
// });

// const User = mongoose.model('User', userSchema);

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

    // userRoute.post('/login', async (req, res) => {
    //     const { email, password } = req.body;
    
    //     try {
    //         // Check if user with given email exists
    //         const user = await User.findOne({ email });
    
    //         if (!user) {
    //             return res.status(400).json({ message: 'Invalid email or password' });
    //         }
    
    //         // Check if password is correct (compare plain text passwords)
    //         if (user.password !== password) {
    //             return res.status(400).json({ message: 'Invalid email or password' });
    //         }

    //         else {
    //             console.log("Login Successful")
    //         }
    
    //         // If email and password are correct, send user details in response
    //         res.status(200).json({
    //             user: {
    //                 _id: user._id,
    //                 name: user.name,
    //                 email: user.email,
    //                 // Add any other user details you want to send
    //             }
    //         });
    //     } catch (error) {
    //         console.error('Login error:', error);
    //         res.status(500).json({ message: 'Server error' });
    //     }
    // });
    userRoute.post('/login', async (req, res) => {
        const { email, password } = req.body;
      
        try {
          // Check if user exists
          const user = await User.findOne({ email });
          if (!user || user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
          }
      
          // Create and send token
          const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // token expiration time
          );
      
          res.json({
            token,
            user: {
              _id: user._id,
              name: user.name,
              email: user.email
              // add any other user data you want to send
            }
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server error' });
        }
      });
    userRoute.get('/me', authMiddleware, async (req, res) => {
        try {
          // Get user ID from the request object
          const userId = req.userId;
      
          // Find user by ID
          const user = await User.findById(userId);
      
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
      
          // Send user details in response
          res.json(user);
        } catch (error) {
          console.error(error.message);
          res.status(500).send('Server Error');
        }
      });
export default userRoute;
