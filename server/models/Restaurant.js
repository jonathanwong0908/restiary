const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    location: {
      type: Object,
      required: true
    },
    visitedDate: {
      type: String
    },
    price: {
      type: Number
    },
    rating: {
      type: Number
    },
    comment: {
      type: String,
    },
    photos: {
      type: [String]
    }
  },
  { timestamps: true }
)

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;