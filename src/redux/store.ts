import { combineReducers } from "redux";
import { recipeApi } from "../services/RecipeService";
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/AuthService";
import authReducer from "../redux/authSlice";

const rootReducer = combineReducers({
  [recipeApi.reducerPath]: recipeApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(recipeApi.middleware)
      .concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
