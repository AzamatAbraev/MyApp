import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => "todos",
    }),
    getSingleTodo: builder.query({
      query: (id) => `/todos/${id}`,
    }),
    getFilteredTodos: builder.query({
      query: ({ limit, skip }) => `todos?limit=${limit}&skip=${skip}`,
    }),
    getTodosByUser: builder.query({
      query: (userId) => `todos/user/${userId}`,
    }),
    getRandomTodo: builder.query({
      query: () => "todos/random",
    }),
    addTodo: builder.mutation({
      query: (newTodo) => ({
        url: "todos/add",
        method: "POST",
        body: newTodo,
      }),
    }),
    updateTodo: builder.mutation({
      query: ({ id, ...updateTodo }) => ({
        url: `todos/${id}`,
        method: "PUT",
        body: updateTodo,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `todo/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useGetFilteredTodosQuery,
  useGetRandomTodoQuery,
  useGetTodosByUserQuery,
  useGetSingleTodoQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
