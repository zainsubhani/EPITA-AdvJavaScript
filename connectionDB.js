import mongoose from "mongoose";

// MongoDB connection string
const mongoURI = "mongodb://localhost:27017/EPITA";

// Enable Mongoose debugging
mongoose.set("debug", true);

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Set a higher timeout (30 seconds)
    bufferCommands: false, // Disable buffering if connection is delayed
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error: ", err);
  });
