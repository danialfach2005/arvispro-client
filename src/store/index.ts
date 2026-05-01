import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import uiReducer from "./uiSlice";
import authReducer from "./authSlice";
import { apiSlice } from "./apiSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    ui: uiReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
