const express = require("express");
const Tour = require("../models/Tour");

const router = express.Router();

// Get all tours
router.get("/", async (req, res) => {
    const tours = await Tour.find();
    res.json(tours);
});

// Add a new tour
router.post("/", async (req, res) => {
    const tour = new Tour(req.body);
    const savedTour = await tour.save();
    res.status(201).json(savedTour);
});

module.exports = router;
