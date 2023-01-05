import { AuthRequest } from "./../models/request/AuthRequest";
import { AuthResponse } from "../models/response/AuthResponse";
import { apiSlice } from "../api/apiSlcie";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<AuthResponse, AuthRequest>({
      query: (request: AuthRequest) => ({
        url: "api/signform2.php",
        method: "POST",
        body: {
          action: "register",
          email: request.email,
          userName: request.userName,
          password: request.password,
        },
      }),
    }),
    loginUser: builder.mutation<AuthResponse, AuthRequest>({
      query: (request: AuthRequest) => ({
        url: "api/signform2.php",
        method: "POST",
        body: {
          action: "signin",
          email: request.email,
          userName: request.userName,
          password: request.password,
        },
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApiSlice;
