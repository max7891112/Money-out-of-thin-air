import { configureStore } from "@reduxjs/toolkit";
import exampleSlice from "./slices/exampleSlice";
import comparsionSlice from './slices/comparsionSlice';

export const store = configureStore({
  reducer: {
    easyMoney: exampleSlice,
    comparsionProduct: comparsionSlice
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
