import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER } from "@env";

const initialState = {
  isAuthenticated: null,
  token: null,
  user: null
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.username;
    },
    setLogout: state => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    }
  }
})

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;