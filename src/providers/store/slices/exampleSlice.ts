import { createSlice } from "@reduxjs/toolkit/react";
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
    sort: "pref" | "limit" | "rate" | "withoutPercent" | "sum" | "anotherHZ";
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
      { title: "Кредитный лимит", value: "500 000 Р" },
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
      // "pref" | "limit" | "rate" | "withoutPercent" | "sum";
      switch (action.payload.sort) {
        case "pref":
          state.sort((a, b) =>
            +a.parametrs[0].value.match(/\d/g).join("") <
            +b.parametrs[0].value.match(/\d/g).join("")
              ? 1
              : -1
          );
          return state;
        case "limit":
          state.sort((a, b) =>
            +a.parametrs[4].value.match(/\d/g).join("") <
            +b.parametrs[4].value.match(/\d/g).join("")
              ? 1
              : -1
          );
          return state;
        case "withoutPercent":
          state.sort((a, b) =>
            +a.parametrs[2].value.match(/\d/g).join("") <
            +b.parametrs[2].value.match(/\d/g).join("")
              ? 1
              : -1
          );
          return state;
        case "sum":
          state.sort((a, b) =>
            +a.parametrs[3].value.match(/\d/g).join("") <
            +b.parametrs[2].value.match(/\d/g).join("")
              ? 1
              : -1
          );
          return state;
        case "anotherHZ":
          state.sort((a, b) =>
            +a.parametrs[1].value.match(/\d/g).join("") <
            +b.parametrs[1].value.match(/\d/g).join("")
              ? 1
              : -1
          );
          return state;
        default:
          return state;
      }
    },
  },
});

export const { sortList } = exampleSlice.actions;
export default exampleSlice.reducer;
