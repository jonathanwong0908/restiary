import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  location: null,
  date: null,
  rating: null,
  price: null,
  comment: null,
  photo: null
}

export const addRestaurantSlice = createSlice({
  name: "addRestaurant",
  initialState,
  reducers: {
    setRestaurantName: (state, action) => {
      state.name = action.payload;
    },
    setRestaurantLocation: (state, action) => {
      state.location = action.payload;
    },
    setRestaurantDate: (state, action) => {
      state.date = action.payload;
    },
    setRestaurantRating: (state, action) => {
      state.rating = action.payload;
    },
    setRestaurantPrice: (state, action) => {
      state.price = action.payload;
    },
    setRestaurantComment: (state, action) => {
      state.comment = action.payload;
    },
    resetAllRestaurantState: (state) => {
      state.name = null;
      state.location = null;
      state.date = null;
      state.rating = null;
      state.price = null;
      state.comment = null;
      state.photo = null;
    }
  }
})

export const {
  setRestaurantName,
  setRestaurantLocation,
  setRestaurantDate,
  setRestaurantRating,
  setRestaurantPrice,
  setRestaurantComment
} = addRestaurantSlice.actions;

export default addRestaurantSlice.reducer;