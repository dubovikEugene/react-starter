import { AuthResponse } from "./../models/response/AuthResponse";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthResponse = {
  token: "",
  refresh_token: "",
  user: { userKey: "", details: "", email: "" },
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
      state.user = { userKey: "", details: "", email: "" };
      state.token = "";
      state.refresh_token = "";
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selecCurrentUser = (state: AuthResponse) => state.user;
export const selecCurrentToken = (state: AuthResponse) => state.token;
export const selecCurrentRefreshToken = (state: AuthResponse) =>
  state.refresh_token;
