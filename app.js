const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Import Routes
const listingRoutes = require("./routes/listingRoutes");
const tourRoutes = require("./routes/tourRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

// Initialize App
const app = express();
app.use(express.json());
app.use(cors());

// Connect to Database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

// API Routes
app.use("/api/vl/auth",authRoute);
app.use("/api/vl/listings", listingRoutes);
app.use("/api/vl/tours", tourRoutes);
app.use("/api/vl/reviews", reviewRoutes);

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
