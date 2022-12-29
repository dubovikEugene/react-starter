import { recipesReducer, selectedRecipeReducer } from "./recipesReducer";
import { recipeApi } from "../../api/apiSlice";
import { combineReducers } from "redux";

const reducers = combineReducers({
  recipeList: recipesReducer,
  recipe: selectedRecipeReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
