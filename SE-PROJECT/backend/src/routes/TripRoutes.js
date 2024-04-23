import express from 'express'
import cors from 'cors'
import multer from 'multer'
import path from 'path'
import dotenv from 'dotenv'

const tripRoute = express.Router()
tripRoute.use(express.json())

tripRoute.use(cors())

dotenv.config()

const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri,{useNewParser:true , useUnifiedTopology:true})

tripRoute.get('/',async(req,res) => {
    try {
        const trips = await Trip.find(); // Retrieve all trips from MongoDB
        res.status(200).json(trips); // Send the retrieved data as a JSON response
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve trips' }); // Error handling
    }
})

export default TripRoutes