import { apiSlice } from "./../api/apiSlcie";
import { IFullRecipe } from "../models/IFullRecipe";
import { IRecipeList } from "../models/IRecipeList";

export const recipeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRecipes: builder.mutation<IRecipeList, void>({
      query: () => ({
        url: "api/files2.php",
        method: "POST",
        body: {
          action: "get_file",
          fileName: "base.json",
        },
      }),
    }),
    getRecipeById: builder.mutation<IFullRecipe, string>({
      query: (id) => ({
        url: "api/files2.php",
        method: "POST",
        body: {
          action: "get_file",
          fileName: `${id}.json`,
        },
      }),
    }),
  }),
});

export const { useGetAllRecipesMutation, useGetRecipeByIdMutation } =
  recipeApiSlice;
