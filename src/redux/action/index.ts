import { IFullRecipe } from "../../types/IFullRecipe";
import { IRecipeList } from "../../types/IRecipeList";
import { ActionTypes } from "../ActionTypes/ActionTypes";

interface SetRecipes {
  type: ActionTypes.SET_RECIPES;
  payload: IRecipeList;
}
interface SelectedRecipe {
  type: ActionTypes.SELECTED_RECIPE;
  payload: IFullRecipe;
}

export type Action = SetRecipes | SelectedRecipe;
