import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./productSlice";
import { postApi } from "./postSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware, postApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
