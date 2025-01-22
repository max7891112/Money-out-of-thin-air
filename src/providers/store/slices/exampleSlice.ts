import { createSlice } from "@reduxjs/toolkit/react";
import {v1} from 'uuid';

type ParametrType = {
  title: string;
  value: string;
};

type TagsType =
  | "Бесплатное обслуживание"
  | "Льготный период больше 90 дней"
  | "Кэшбэк рублями"
  | "Кэшбэк хуями";

type BankItemType = {
  id: string;
  nameBank: string;
  nameCard: string;
  parametrs: ParametrType[];
  tags?: TagsType[];
};

type ListOfBanksType = BankItemType[];

const initialState: ListOfBanksType = [
  {
    id: v1(),
    nameBank: "Т-банк",
    nameCard: "Platinum Premium",
    parametrs: [
      { title: "Кредитный лимит", value: "1 500 000 Р" },
      { title: "Процентная ставка", value: "20%" },
      { title: "Льготный период", value: "120 дней" },
      { title: "Беспроцентный период", value: "60 дней" },
      { title: "Сумма на снятие", value: "500 000 Р" },
    ],
    tags: [
      "Бесплатное обслуживание",
      "Льготный период больше 90 дней",
      "Кэшбэк рублями",
      "Кэшбэк хуями",
    ],
  },
];

// const initialState = { count: 1 };

const exampleSlice = createSlice({
  name: "exampleSlice",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.count = state.count + 1;
    //   return state;
    // },
    // decrement: (state) => {
    //   state.count = state.count - 1;
    //   return state;
    // },
  },
});

// export const { increment, decrement } = exampleSlice.actions;
export default exampleSlice.reducer;
