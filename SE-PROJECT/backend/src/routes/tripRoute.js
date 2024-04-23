import express from 'express'
import cors from 'cors'
import multer from 'multer'
import path from 'path'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const tripRoute = express.Router()
tripRoute.use(express.json())

tripRoute.use(cors())

dotenv.config()

const mongoUri = process.env.MONGO_URI;

const tripSchema = new mongoose.Schema({
    image: { url: String, alt: String },
    title: String,
    description: String,
    price: Number,
    date: Date
});

const Trip = mongoose.model('Trip',tripSchema)

mongoose.connect(mongoUri)

tripRoute.get('/',async(req,res) => {
    try {
        const trips = await Trip.find(); // Retrieve all trips from MongoDB
        res.status(200).json(trips); // Send the retrieved data as a JSON response
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve trips' }); // Error handling
    }
})

export default tripRoute