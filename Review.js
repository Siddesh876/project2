const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", reviewSchema);
