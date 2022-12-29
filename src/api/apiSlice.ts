import { IFullRecipe } from "./../types/IFullRecipe";
import { IRecipeList } from "./../types/IRecipeList";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.workstmt.com/!yauheni/" }),
  endpoints: (builder) => ({
    getAllRecipes: builder.query<IRecipeList, void>({
      query: () => "base.json",
    }),
    getRecipe: builder.query<IFullRecipe, string>({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetAllRecipesQuery, useGetRecipeQuery } = recipeApi;
