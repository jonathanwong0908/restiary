const express = require("express");
const { authorizeUser } = require("../controllers/auth");
const { postAddRestaurant, getRestaurants, updateRestaurant, deleteRestaurant } = require("../controllers/restaurant");

const router = express.Router();

router.post("/addNewRestaurant", authorizeUser, postAddRestaurant);

router.get("/getRestaurants", authorizeUser, getRestaurants);

router.put("/updateRestaurant", authorizeUser, updateRestaurant);

router.delete("/deleteRestaurant", authorizeUser, deleteRestaurant);

module.exports = router;