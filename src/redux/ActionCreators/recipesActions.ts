import { Action } from "../action/index";
import { IFullRecipe } from "../../types/IFullRecipe";
import { IRecipeList } from "../../types/IRecipeList";
import { Dispatch } from "redux";
import { ActionTypes } from "../ActionTypes/ActionTypes";

export const setRecipes = (recipes: IRecipeList) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SET_RECIPES,
      payload: recipes,
    });
  };
};

export const selectedRecipe = (recipe: IFullRecipe) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SELECTED_RECIPE,
      payload: recipe,
    });
  };
};
