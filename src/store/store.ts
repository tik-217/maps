import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { coordinate } from "../services/api";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: {
    rootReducer,
    [coordinate.reducerPath]: coordinate.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coordinate.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

setupListeners(store.dispatch);