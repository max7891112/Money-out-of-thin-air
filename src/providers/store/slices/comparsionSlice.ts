import { createSlice } from "@reduxjs/toolkit/react";
import {
  ListOfBanksType,
  ActionBankItemType,
} from "../../../interface/interface";

const initialState: ListOfBanksType = [];

const comparsionSlice = createSlice({
  name: "comparsionSlice",
  initialState,
  reducers: {
    addItemForComparsion: (state, action: ActionBankItemType) => {
      state.length = 0;
      state.push(action.payload.bank);
      state.map(item => console.log(item.nameBank));
      return state;
    },
  },
});

export const { addItemForComparsion } = comparsionSlice.actions; // редьюсеры
export default comparsionSlice.reducer;
