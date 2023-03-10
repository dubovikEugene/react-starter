import { AuthResponse } from "./../models/response/AuthResponse";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthResponse = {
  token: "",
  refresh_token: "",
  user: { details: { userKey: "", email: "" } },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token, refresh_token } = action.payload;
      state.user = user;
      state.token = token;
      state.refresh_token = refresh_token;
    },
    logOut: (state) => {
      state.user = { details: { userKey: "", email: "" } };
      state.token = "";
      state.refresh_token = "";
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
