import { apiSlice } from "./../api/apiSlcie";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice";
import recipesReducer from "../redux/recipeSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  recipes: recipesReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
