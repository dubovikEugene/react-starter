import { createSlice } from "@reduxjs/toolkit";
import { IFullRecipe } from "../models/IFullRecipe";

const initialState = {
  fullRecipes: [
    {
      cookingTime: "",
      id: "",
      img: "",
      ingridients: [{ name: "", quantity: "" }],
      name: "",
      recipe: "",
    } as IFullRecipe,
  ],
};

const fullRecipeSlice = createSlice({
  name: "fullRecipes",
  initialState: initialState,
  reducers: {
    setFullRecipe: (state, action) => {
      const recipe = action.payload;
      state.fullRecipes = [...state.fullRecipes, recipe];
    },
    removeFullRecipes: (state) => {
      state.fullRecipes = [];
    },
  },
});

export const { setFullRecipe, removeFullRecipes } = fullRecipeSlice.actions;

export default fullRecipeSlice.reducer;
