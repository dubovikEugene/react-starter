import { IRecipeList } from "./../../types/IRecipeList";
import { ActionTypes } from "../ActionTypes/ActionTypes";
import { Action } from "./../action/index";
import { Reducer } from "@reduxjs/toolkit";
import { IFullRecipe } from "../../types/IFullRecipe";

const initialRecipesState: IRecipeList = {
  recipes: [],
};
const initialRecipeState: IFullRecipe = {
  cookingTime: 0,
  id: "",
  img: "",
  ingridients: [],
  name: "",
  recipe: "",
};

export const recipesReducer = (state = initialRecipesState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_RECIPES:
      return { ...state, recipes: action.payload };
    default:
      return state;
  }
};

export const selectedRecipeReducer = (
  state = initialRecipeState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.SELECTED_RECIPE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
