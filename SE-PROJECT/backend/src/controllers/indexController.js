// src/controllers/indexController.js

const { client } = require('../utils/mongoConnection');

async function index(req, res) {
    try {
        const db = client.db('myDatabase'); // Change 'myDatabase' to your database name
        const collection = db.collection('myCollection'); // Change 'myCollection' to your collection name
        const documents = await collection.find({}).toArray();
        res.json(documents);
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    index
};
