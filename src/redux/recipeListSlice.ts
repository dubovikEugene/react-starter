import { IFullRecipe } from "../models/IFullRecipe";
import { IRecipeList } from "../models/IRecipeList";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IRecipeList = {
  recipes: [],
};

const recipeListSlice = createSlice({
  name: "recipes",
  initialState: initialState,
  reducers: {
    setRecipes: (state, action) => {
      const { recipes } = action.payload;
      state.recipes = recipes;
    },
    setOneRecipe: (state, action) => {
      const recipe = action.payload;
      state.recipes = [...state.recipes, recipe];
    },
    removeRecipes: (state) => {
      state.recipes = [];
    },
  },
});

export const { setRecipes, removeRecipes, setOneRecipe } =
  recipeListSlice.actions;

export default recipeListSlice.reducer;

export const selecCurrentRecipe = (state: IRecipeList) => state.recipes;
