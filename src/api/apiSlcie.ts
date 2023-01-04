import { RootState } from "./../redux/store";
import { AuthRequest } from "./../models/request/AuthRequest";
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../redux/authSlice";
import { AuthResponse } from "../models/response/AuthResponse";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://ustka.travel/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: "/api/signform2.php",
        method: "POST",
        body: {
          action: "refreshToken",
          refresh_token: (api.getState() as RootState).auth.refresh_token,
        },
      },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      const newCredentials: AuthResponse = {
        token: `${refreshResult.data}`,
        refresh_token: (api.getState() as RootState).auth.refresh_token,
        user: (api.getState() as RootState).auth.user,
      };
      api.dispatch(setCredentials(newCredentials));
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.log("logout");
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
