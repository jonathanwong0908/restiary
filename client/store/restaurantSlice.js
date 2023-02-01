import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurants: null
}

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurants: (state, action) => {
      state.restaurants = action.payload;
    }
  }
})

export const { setRestaurants } = restaurantSlice.actions;

export default restaurantSlice.reducer;