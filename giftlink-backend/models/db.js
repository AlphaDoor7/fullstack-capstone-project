// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance; // Return existing instance if already connected
    }

    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });      

    try {
        // Task 1: Connect to MongoDB
        await client.connect(); // Establish connection to MongoDB

        // Task 2: Connect to database giftdb and store in variable dbInstance
        dbInstance = client.db(dbName); // Get the database instance

        // Task 3: Return database instance
        return dbInstance; // Return the database instance
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error; // Rethrow the error to handle it upstream
    }
}

module.exports = connectToDatabase;
