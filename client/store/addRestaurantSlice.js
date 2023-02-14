import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  location: null,
  date: null,
  rating: null,
  price: null,
  comment: null,
  photo: []
}

export const addRestaurantSlice = createSlice({
  name: "addRestaurant",
  initialState,
  reducers: {
    setNewRestaurantName: (state, action) => {
      state.name = action.payload;
    },
    setNewRestaurantLocation: (state, action) => {
      state.location = action.payload;
    },
    setNewRestaurantDate: (state, action) => {
      state.date = action.payload;
    },
    setNewRestaurantRating: (state, action) => {
      state.rating = action.payload;
    },
    setNewRestaurantPrice: (state, action) => {
      state.price = action.payload;
    },
    setNewRestaurantComment: (state, action) => {
      state.comment = action.payload;
    },
    setNewRestaurantPhoto: (state, action) => {
      state.photo = [...state.photo, action.payload];
    },
    resetAllNewRestaurantState: (state) => {
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
  setNewRestaurantName,
  setNewRestaurantLocation,
  setNewRestaurantDate,
  setNewRestaurantRating,
  setNewRestaurantPrice,
  setNewRestaurantComment,
  setNewRestaurantPhoto,
  resetAllNewRestaurantState
} = addRestaurantSlice.actions;

export default addRestaurantSlice.reducer;