// src/app.js

const express = require('express');
const { connect } = require('./utils/mongoConnection');

const app = express();

// Connect to MongoDB
connect();

// Define routes and middleware here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
