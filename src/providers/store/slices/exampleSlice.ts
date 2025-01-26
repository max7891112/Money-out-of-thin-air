import { createSlice } from "@reduxjs/toolkit/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

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

type ActionSortType = {
  payload: {
    sort: "CredLim" | "SumSnat" | "LgotPer" | "BesprPer" | "ProcSt" | 'Reverse';
  };
};

const initialState: ListOfBanksType = [
  {
    id: uuid(),
    nameBank: "Т-банк",
    nameCard: "Platinum Premium",
    parametrs: [
      { title: "Кредитный лимит", value: "1 500 000 Р" },
      { title: "Процентная ставка", value: "20%" },
      { title: "Льготный период", value: "35 дней" },
      { title: "Беспроцентный период", value: "60 дней" },
      { title: "Сумма на снятие", value: "150 000 Р" },
    ],
    tags: [
      "Бесплатное обслуживание",
      "Льготный период больше 90 дней",
      "Кэшбэк рублями",
      "Кэшбэк хуями",
    ],
  },
  {
    id: uuid(),
    nameBank: "Сбербанк",
    nameCard: "120 дней без %",
    parametrs: [
      { title: "Кредитный лимит", value: "1 000 000 Р" },
      { title: "Процентная ставка", value: "25%" },
      { title: "Льготный период", value: "120 дней" },
      { title: "Беспроцентный период", value: "60 дней" },
      { title: "Сумма на снятие", value: "15 000 Р" },
    ],
    tags: ["Льготный период больше 90 дней", "Кэшбэк хуями"],
  },
  {
    id: uuid(),
    nameBank: "Альфа",
    nameCard: "Премиум кредит",
    parametrs: [
      { title: "Кредитный лимит", value: "1 300 000 Р" },
      { title: "Процентная ставка", value: "20%" },
      { title: "Льготный период", value: "70 дней" },
      { title: "Беспроцентный период", value: "60 дней" },
      { title: "Сумма на снятие", value: "25 000 Р" },
    ],
    tags: ["Льготный период больше 90 дней", "Кэшбэк хуями", "Кэшбэк рублями"],
  },
  {
    id: uuid(),
    nameBank: "СПБ банк",
    nameCard: "Ясно",
    parametrs: [
      { title: "Кредитный лимит", value: "500 000 Р" }, // порядок title не менять)))))
      { title: "Процентная ставка", value: "23%" },
      { title: "Льготный период", value: "50 дней" },
      { title: "Беспроцентный период", value: "80 дней" },
      { title: "Сумма на снятие", value: "50 000 Р" },
    ],
    tags: ["Льготный период больше 90 дней", "Кэшбэк хуями"],
  },
];

const exampleSlice = createSlice({
  name: "exampleSlice",
  initialState,
  reducers: {
    sortList: (state, action: ActionSortType) => {
      function sortFunc(a: BankItemType, b: BankItemType, number: number) {
        return +a.parametrs[number].value.match(/\d/g).join("") <
          +b.parametrs[number].value.match(/\d/g).join("")
          ? 1
          : -1;
      }

      switch (action.payload.sort) {
        case "CredLim":
          state.sort((a, b) => sortFunc(a, b, 0));
          return state;
        case "SumSnat":
          state.sort((a, b) => sortFunc(a, b, 4));
          return state;
        case "LgotPer":
          state.sort((a, b) => sortFunc(a, b, 2));
          return state;
        case "BesprPer":
          state.sort((a, b) => sortFunc(a, b, 3));
          return state;
          case "ProcSt":
            state.sort((a, b) => sortFunc(a, b, 1));
            return state;
          case "Reverse":
            return state.reverse();
          default:
          return state;
      }
    },
  },
});

export const { sortList } = exampleSlice.actions;
export default exampleSlice.reducer;
