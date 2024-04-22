// src/models/indexModel.js

const { client } = require('../utils/mongoConnection');

async function getAllDocuments() {
    try {
        const db = client.db('Tourism'); // Change 'myDatabase' to your database name
        const collection = db.collection('attractions'); // Change 'myCollection' to your collection name
        const documents = await collection.find({}).toArray();
        return documents;
    } catch (error) {
        console.error("Error retrieving documents:", error);
        throw new Error("Error retrieving documents");
    }
}

async function insertDocument(document) {
    try {
        const db = client.db('Tourism'); // Change 'myDatabase' to your database name
        const collection = db.collection('attractions'); // Change 'myCollection' to your collection name
        const result = await collection.insertOne(document);
        return result.insertedId;
    } catch (error) {
        console.error("Error inserting document:", error);
        throw new Error("Error inserting document");
    }
}

module.exports = {
    getAllDocuments,
    insertDocument
};
