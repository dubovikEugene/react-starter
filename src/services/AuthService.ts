import { RootState } from "./../redux/store";
import { AuthRequest } from "./../models/request/AuthRequest";
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { AuthResponse } from "../models/response/AuthResponse";
import { setCredentials, logOut } from "../redux/authSlice";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "https://api.workstmt.com/!yauheni/",
//   credentials: "include",
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as RootState).auth.token;
//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }
//   },
// });

// const baseQueryWithReauth: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result?.error?.status === 401) {
//     console.log(result?.error?.status);
//     const refreshResult = await baseQuery(args, api, {
//       action: "refreshToken",
//     });
//     console.log("refresh token");
//   }
//   return result;
// };

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://ustka.travel/",
    // mode: "cors",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
    },
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<AuthResponse, AuthRequest>({
      query: (body: AuthRequest) => ({
        url: "api/signform.php",
        method: "POST",
        body: body,
      }),
    }),
    loginUser: builder.mutation<AuthResponse, AuthRequest>({
      query: (body: AuthRequest) => ({
        url: "api/signform.php",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
