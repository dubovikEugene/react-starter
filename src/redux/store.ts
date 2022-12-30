import { combineReducers } from "redux";
import { recipeApi } from "../services/RecipeService";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  [recipeApi.reducerPath]: recipeApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
