import { apiSlice } from "./../api/apiSlcie";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice";
import recipesReducer from "./recipeListSlice";
import fullRecipeReducer from "./fullRecipeSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  recipes: recipesReducer,
  fullRecipes: fullRecipeReducer,
});

const persistConfig = {
  key: "persist",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
