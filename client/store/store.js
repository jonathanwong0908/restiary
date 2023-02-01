import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import addRestaurantReducer from "./addRestaurantSlice";
import restaurantReducer from "./restaurantSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    addRestaurant: addRestaurantReducer,
    restaurant: restaurantReducer
  }
})