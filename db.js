const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // MongoDB connection URI
const dbName = 'mydatabase'; // Name of your database

let client;

async function connectToDatabase() {
    try {
        client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
}

function getDatabase() {
    return client.db(dbName);
}

function closeDatabase() {
    client.close();
    console.log('Database connection closed');
}

module.exports = {
    connectToDatabase,
    getDatabase,
    closeDatabase,
};