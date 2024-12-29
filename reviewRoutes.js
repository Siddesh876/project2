const express = require("express");
const Review = require("../models/Review");

const router = express.Router();

// Get all reviews
router.get("/", async (req, res) => {
    const reviews = await Review.find();
    res.json(reviews);
});

// Add a new review
router.post("/", async (req, res) => {
    const review = new Review(req.body);
    const savedReview = await review.save();
    res.status(201).json(savedReview);
});

module.exports = router;
