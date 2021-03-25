import { createSlice } from "@reduxjs/toolkit";

export const burgerSlice = createSlice({
    name: 'burger',
    initialState: {
        pressed: false,
    },
    reducers: {
        isPressed: (state, data) => {
            state.pressed = data.payload;
        },

    }
});

export const { isPressed } = burgerSlice.actions;
export const selectBurger = (state: any) => state.burger.pressed;
export default burgerSlice.reducer;