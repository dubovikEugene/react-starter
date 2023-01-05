import { AuthRequest } from "./../models/request/AuthRequest";
import { AuthResponse } from "../models/response/AuthResponse";
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
