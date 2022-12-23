import { recipesReducer, selectedRecipeReducer } from "./recipesReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  recipeList: recipesReducer,
  recipe: selectedRecipeReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
