import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const USER_BASE_URL = "/api";
export const UserApi = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${USER_BASE_URL}`,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    // transaction: builder.query({
    //   query: () => "/transaction-list",
    //   providesTags: ["Users"],
    // }),
    signIn: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignInMutation } = UserApi;
