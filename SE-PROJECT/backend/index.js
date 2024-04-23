import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import asyncHandler from 'express-async-handler'
import dotenv from 'dotenv'
//import tripRoute from '../routes/tripRoute.js'
import tripRoute from './src/routes/tripRoute.js';

dotenv.config()


const app = express();
const PORT = process.env.PORT || 8081;
app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI;
const databaseName = process.env.MONGO_DB_NAME;

// Connect to MongoDB
mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
  console.log(`Connected to mongodb database : ${databaseName}`)
})

mongoose.connection.on('error', (err) => {
  console.error('Failed to connect to MongoDB:', err);
});
app.use('/api/trips',tripRoute)



// Define routes and middleware here
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
