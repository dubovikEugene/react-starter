import { apiSlice } from "./../api/apiSlcie";
import { IFullRecipe } from "../models/IFullRecipe";
import { IRecipeList } from "../models/IRecipeList";
import { RecipesRequest } from "../models/request/REcipesRequest";

export const recipeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRecipes: builder.mutation<IRecipeList, RecipesRequest>({
      query: (body: RecipesRequest) => ({
        url: "api/files2.php",
        method: "POST",
        body: JSON.stringify(body),
      }),
    }),
    getRecipeById: builder.query<IFullRecipe, string>({
      query: (id) => ({
        url: `${id}`,
      }),
    }),
  }),
});

// createApi({
//   reducerPath: "recipeApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://api.workstmt.com/!yauheni/" }),
//   endpoints: (builder) => ({
//     getAllRecipes: builder.query<IRecipeList, void>({
//       query: () => ({
//         url: "base.json",
//       }),
//     }),
//     getRecipeById: builder.query<IFullRecipe, string>({
//       query: (id) => ({
//         url: `${id}`,
//       }),
//     }),
//   }),
// });

export const { useGetAllRecipesMutation, useGetRecipeByIdQuery } =
  recipeApiSlice;
