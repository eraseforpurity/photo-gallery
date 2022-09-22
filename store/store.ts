import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import galleryReducer from "./gallerySlice";

const store = configureStore({
  reducer: { gallery: galleryReducer },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
