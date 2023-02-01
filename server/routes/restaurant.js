const express = require("express");
const { authorizeUser } = require("../controllers/auth");
const { postAddRestaurant } = require("../controllers/restaurant");

const router = express.Router();

router.post("/addNewRestaurant", authorizeUser, postAddRestaurant);

module.exports = router;