import express, { json } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import helmet from "helmet";
import todoRoutes from "./api/todoRoutes/todoRoutes.js"; // Ensure this path is correct

// Load environment variables from .env file
config();

const app = express();
const PORT = 4000;

// MongoDB connection string
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/EPITA"; // Use the URI from the .env file

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error: ", err);
  });

// Middleware setup
app.use(cors());
app.use(helmet());
app.use(json());

// Routes setup
app.use("/", todoRoutes); // Add /api prefix to your routes if needed

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
