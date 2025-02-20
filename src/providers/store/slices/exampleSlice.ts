import { createSlice } from "@reduxjs/toolkit/react";
import { v4 as uuid } from "uuid";
import {
  BankItemType,
  ListOfBanksType,
  ActionSortType,
} from "../../../interface/interface";

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
    schemes: [
      {
        name: "Кладём до 200к на накопительный счёт/краткосрочный вклад",
        scheme:
          "Т-банк позволяет переводить в грейс и без комиссии кредитный средства в месяц на любой счет до 50к (без подписки), 100к (подписка Pro), 200к (подписка Premium). Как итог – раз в РП можно «каруселить» 100к. Если кредитный лимит более 100к, то в первый РП переводите 100к, далее еще 100к. Итого Вы «каруселите» 200к.",
      },
      {
        name: "Вывод оставшегося лимита на БКС инвестиции",
        scheme:
          "Регистрируемся на БКС-инвестиции (10-15 минут). Далее пополняем счет с помощью СБП. Всё, весь лимит в работе (не забываем постоянно проверять МСС, вдруг Т-банк внесет их в исключение).",
      },
    ],
    description: [
      { name: "Выпуск карты", value: "0₽" },
      { name: "Обслуживание", value: "0₽" },
      { name: "Страховка", value: "не навязывают" },
      {
        name: "Кэшбэк",
        value: "До 10% в пяти категориях на выбор на месяц. До 30% у партнеров",
      },
      {
        name: "Округление",
        value: "Кэшбэк начисляется на каждые полные 100₽ в чеке",
      },
      { name: "Когда выплачивают", value: "В течении 5 рабочих дней" },
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
    description: [
      { name: "Выпуск карты", value: "0₽" },
      { name: "Обслуживание", value: "0₽" },
      { name: "Страховка", value: "не навязывают" },
      {
        name: "Кэшбэк",
        value: "До 10% в пяти категориях на выбор на месяц. До 30% у партнеров",
      },
      {
        name: "Округление",
        value: "Кэшбэк начисляется на каждые полные 100₽ в чеке",
      },
      { name: "Когда выплачивают", value: "В течении 5 рабочих дней" },
    ],
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
    description: [
      { name: "Выпуск карты", value: "0₽" },
      { name: "Обслуживание", value: "0₽" },
      { name: "Страховка", value: "не навязывают" },
      {
        name: "Кэшбэк",
        value: "До 10% в пяти категориях на выбор на месяц. До 30% у партнеров",
      },
      {
        name: "Округление",
        value: "Кэшбэк начисляется на каждые полные 100₽ в чеке",
      },
      { name: "Когда выплачивают", value: "В течении 5 рабочих дней" },
    ],
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
    description: [
      { name: "Выпуск карты", value: "0₽" },
      { name: "Обслуживание", value: "0₽" },
      { name: "Страховка", value: "не навязывают" },
      {
        name: "Кэшбэк",
        value: "До 10% в пяти категориях на выбор на месяц. До 30% у партнеров",
      },
      {
        name: "Округление",
        value: "Кэшбэк начисляется на каждые полные 100₽ в чеке",
      },
      { name: "Когда выплачивают", value: "В течении 5 рабочих дней" },
    ],
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
