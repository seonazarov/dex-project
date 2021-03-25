import {createSlice} from "@reduxjs/toolkit";

export const selPageSlice = createSlice({
    name: 'selected',
    initialState: {
        count: 6,
    },
    reducers: {
        sizePage: (state, data) =>{
            state.count = data.payload;
        }
    }
});

export const {sizePage} = selPageSlice.actions;
export const selectSizePage = (state:any) => state.selected.count;
export default selPageSlice.reducer;