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
import { apiSlice } from "../api/apiSlcie";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<AuthResponse, AuthRequest>({
      query: (body: AuthRequest) => ({
        url: "api/signform2.php",
        method: "POST",
        body: body,
      }),
    }),
    loginUser: builder.mutation<AuthResponse, AuthRequest>({
      query: (body: AuthRequest) => ({
        url: "api/signform2.php",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApiSlice;
