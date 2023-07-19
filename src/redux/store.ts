import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./api/usersApi";
import { postsApi } from "./api/postsApi";

const reducer = {
  [usersApi.reducerPath]: usersApi.reducer,
  [postsApi.reducerPath]: postsApi.reducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware).concat(postsApi.middleware),
});
