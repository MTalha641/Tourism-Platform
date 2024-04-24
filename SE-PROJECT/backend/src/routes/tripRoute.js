import express from 'express'
import cors from 'cors'
import multer from 'multer'
import path from 'path'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { stringify } from 'querystring'

const tripRoute = express.Router()
tripRoute.use(express.json())

tripRoute.use(cors())

dotenv.config()

const mongoUri = process.env.MONGO_URI;

const tripSchema = new mongoose.Schema({
    image: { url: String, alt: String },
    description: String,
    price: Number,
    date: Date,
    title: String
});
tripSchema.index({ destination: 'text' });
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
tripRoute.get('/search', async (req, res) => {
    try {
        const { destination } = req.query;
        const {search} = desintation
        console.log(destination)
        
        // Check if destination is provided in the query parameters
        if (!destination) {
            throw { code: 400, error: "Destination parameter is missing" };
        }

        // Perform text-based search for the provided destination
        const trips = await Trip.find(search);

        // Check if any trips are found
        if (!trips || trips.length === 0) {
            throw { code: 404, error: "No trips found with the provided destination" };
        }

        // Return the found trips
        return res.status(200).json(trips);
    } catch (err) {
        // Handle errors
        return res.status(err.code || 500).json({ error: err.error || "Internal Server Error" });
    }
});




export default tripRoute