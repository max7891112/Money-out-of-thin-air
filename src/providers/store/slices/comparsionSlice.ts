import { createSlice } from "@reduxjs/toolkit/react";

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

type ActionBankItemType = {
    payload: {
        bank: BankItemType
    };
};

const initialState: ListOfBanksType = [
  
];


const comparsionSlice = createSlice({
    name: 'comparsionSlice',
    initialState,
    reducers: {
        addItemForComparsion: (state, action: ActionBankItemType) => {
            state.push(action.payload.bank);
            console.log(state[1])
            return state;
        }
    },
});

export const {addItemForComparsion} = comparsionSlice.actions; // редьюсеры
export default comparsionSlice.reducer;