const express = require("express");
const Listing = require("../models/Listing");

const router = express.Router();

// Get all listings
router.get("/", async (req, res) => {
    const listings = await Listing.find();
    res.json(listings);
});

// Add a new listing
router.post("/", async (req, res) => {
    const listing = new Listing(req.body);
    const savedListing = await listing.save();
    res.status(201).json(savedListing);
});

module.exports = router;
