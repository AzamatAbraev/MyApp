import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "posts",
    }),
    getSinglePost: builder.query({
      query: (id) => `/posts/${id}`,
    }),
    getFilteredPosts: builder.query({
      query: ({ query, limit, skip, sortBy, order }) =>
        `posts/search?q=${query}&limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`,
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: "posts/add",
        method: "POST",
        body: newPost,
      }),
    }),
    updatePost: builder.mutation({
      query: ({ id, ...updatePost }) => ({
        url: `posts/${id}`,
        method: "PUT",
        body: updatePost,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetSinglePostQuery,
  useGetFilteredPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
