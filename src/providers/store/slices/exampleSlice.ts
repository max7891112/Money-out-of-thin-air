import { createSlice } from "@reduxjs/toolkit/react";

const initialState = { count: 1 };

const exampleSlice = createSlice({
  name: "exampleSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
      return state;
    },
    decrement: (state) => {
      state.count = state.count - 1;
      return state;
    },
  },
});

export const { increment, decrement } = exampleSlice.actions;
export default exampleSlice.reducer;
