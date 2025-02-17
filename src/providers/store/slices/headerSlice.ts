import { createSlice } from "@reduxjs/toolkit/react";

type ActionChangeMenuType = {
    payload: {
        type: boolean
    };
};

const initialState = false

const headerSlice = createSlice({
    name: 'comparsionSlice',
    initialState,
    reducers: {
        changeMenu: (state, action: ActionChangeMenuType) => {
            state = action.payload.type
            return state;
        },
    },
});

export const {changeMenu} = headerSlice.actions;
export default headerSlice.reducer;