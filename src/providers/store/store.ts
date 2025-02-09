import { configureStore } from "@reduxjs/toolkit";
import exampleSlice from "./slices/exampleSlice";

export const store = configureStore({
  reducer: {
    easyMoney: exampleSlice,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
