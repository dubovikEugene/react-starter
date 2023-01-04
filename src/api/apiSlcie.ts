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
    console.log("refresh token --> " + refreshResult?.data);
    if (refreshResult?.data) {
      const newToken = (api.getState() as RootState).auth.refresh_token;
      const newToken1 = refreshResult.data;
      console.log("set token --> " + newToken1);
      // localStorage.setItem("token", newToken);
      api.dispatch(setCredentials({ ...refreshResult.data, newToken }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
