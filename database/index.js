const mongoose = require("mongoose")

async function connectToDatabase() {
    const connectionString = process.env.CONNECTION_STRING
    if (!connectionString) {
        throw new Error("Connection string must provide!")
    }
    try {
        await mongoose.connect(connectionString)
        console.log("Database connected successfully!")
    } catch (error) {
        console.log("Database connection failed.", error)
    }
}

module.exports = connectToDatabase