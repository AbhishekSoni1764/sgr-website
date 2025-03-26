import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        console.log("✅ Already Connected to the Database");
        return;
    }

    try {
        const connectionURL = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.DATABASE_NAME, // ✅ Use dbName option
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // ⏳ Set timeout to 5s
        });

        connection.isConnected = connectionURL.connections[0].readyState;
        console.log("✅ Database connected successfully");
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
        process.exit(1);
    }
}

export default dbConnect;
