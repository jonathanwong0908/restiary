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
    await user.populate("restaurants");
    const restaurants = user.restaurants;
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.getRestaurants = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user.restaurants.length) return res.json([]);
    await user.populate("restaurants");
    const restaurants = user.restaurants;
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.updateRestaurant = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    const { id, name, location, visitedDate, price, rating, comment, photos } = req.body;
    const restaurant = await Restaurant.findById(id);
    restaurant.name = name;
    restaurant.location = location;
    restaurant.visitedDate = visitedDate;
    restaurant.price = price;
    restaurant.rating = rating;
    restaurant.comment = comment;
    restaurant.photos = photos;
    await restaurant.save();
    await user.populate("restaurants");
    const restaurants = user.restaurants;
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.deleteRestaurant = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    const restaurantId = req.body.id;
    await Restaurant.deleteOne({ _id: restaurantId });
    await user.populate("restaurants");
    const restaurants = user.restaurants;
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}