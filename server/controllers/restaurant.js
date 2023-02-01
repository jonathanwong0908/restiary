const User = require("../models/User");
const Restaurant = require("../models/Restaurant");

exports.postAddRestaurant = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    const { name, location, date, rating, price, comment, photo } = req.body;
    const newRestaurant = new Restaurant({
      name,
      location,
      rating,
      comment,
      price: +price,
      photos: photo,
      visitedDate: date,
    })
    await newRestaurant.save();
    user.restaurants = [newRestaurant.id, ...user.restaurants];
    await user.save();
    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}