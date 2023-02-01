const express = require("express");
const { authorizeUser } = require("../controllers/auth");
const { postAddRestaurant, getRestaurants } = require("../controllers/restaurant");

const router = express.Router();

router.post("/addNewRestaurant", authorizeUser, postAddRestaurant);

router.get("/getRestaurants", authorizeUser, getRestaurants);

module.exports = router;