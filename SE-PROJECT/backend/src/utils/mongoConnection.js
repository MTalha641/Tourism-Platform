// src/utils/mongoConnection.js

const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017"; // MongoDB connection URI

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = {
    connect,
    client
};
