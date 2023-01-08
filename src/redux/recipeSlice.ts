import { IRecipeList } from "./../models/IRecipeList";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IRecipeList = {
  recipes: [],
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState: initialState,
  reducers: {
    setRecipes: (state, action) => {
      const { recipes } = action.payload;
      state.recipes = recipes;
    },
  },
});

export const { setRecipes } = recipeSlice.actions;

export default recipeSlice.reducer;

export const selecCurrentRecipe = (state: IRecipeList) => state.recipes;
