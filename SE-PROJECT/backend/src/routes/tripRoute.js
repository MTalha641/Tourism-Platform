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
    destination: String
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
        
        // Check if destination is provided in the query parameters
        if (!destination) {
            throw { code: 400, error: "Destination parameter is missing" };
        }

        // Perform text-based search for the provided destination
        // const trips = await Trip.find({ $text: { $search: destination } });

        //const trips = await Trip.find({destination:{$regex : `/${destination.value}/i`}}).limit(5)

        // const trips = await Trip.find({
        //     destination: { $regex: new RegExp(destination, 'i') },
        // }).limit(5);

        const trips = await Trip.find({
            destination: { $regex: new RegExp(`^${destination}`, 'i') },
        }).limit(5);


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


// tripRoute.get('/searchprice', async (req, res) => {
//     try {
//         const { destination, minPrice, maxPrice, maxDate } = req.query;

//         // Construct query object based on available filters
//         const query = {};
//         if (destination) {
//             query.destination = destination;
//         }
//         if (minPrice && !isNaN(minPrice)) {
//             query.price = { $gte: parseInt(minPrice) };
//         }
//         if (maxPrice && !isNaN(maxPrice)) {
//             query.price = { ...query.price, $lte: parseInt(maxPrice) };
//         }
//         if (maxDate) {
//             query.date = { $lte: new Date(maxDate) };
//         }

//         // Perform search based on the constructed query
//         const trips = await Trip.find(query);

//         if (!trips || trips.length === 0) {
//             throw { code: 404, error: "No trips found matching the search criteria" };
//         }

//         res.status(200).json(trips);
//     } catch (err) {
//         res.status(err.code || 500).json({ error: err.error || "Internal Server Error" });
//     }
// });




// Assuming you're using Express.js for your backend



// Route to search for trips based on relevant date
tripRoute.get('/searchdate', async (req, res) => {
  const { date } = req.query; // Assuming date is provided as a query parameter

  try {
    // Fetch trips that match or are after the provided date
    const trips = await Trip.find({ date: { $gte: new Date(date) } });
    res.json(trips);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch data" });
  }
});





export default tripRoute