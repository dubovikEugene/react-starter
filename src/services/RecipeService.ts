import { IFullRecipe } from "../models/IFullRecipe";
import { IRecipeList } from "../models/IRecipeList";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.workstmt.com/!yauheni/" }),
  endpoints: (builder) => ({
    getAllRecipes: builder.query<IRecipeList, void>({
      query: () => ({
        url: "base.json",
      }),
    }),
    getRecipeById: builder.query<IFullRecipe, string>({
      query: (id) => ({
        url: `${id}`,
      }),
    }),
  }),
});

export const { useGetAllRecipesQuery, useGetRecipeByIdQuery } = recipeApi;
