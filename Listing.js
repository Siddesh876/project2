const mongoose = require("mongoose");

const listingSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
});

module.exports = mongoose.model("Listing", listingSchema);
