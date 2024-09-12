import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getFilteredProducts: builder.query({
      query: ({ query, limit, skip, sortBy, order }) =>
        `products/search?q=${query}&limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`,
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "products/add",
        method: "POST",
        body: newProduct,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...updatedProduct }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: updatedProduct,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetFilteredProductsQuery,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
