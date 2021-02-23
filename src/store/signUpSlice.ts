import { createSlice } from "@reduxjs/toolkit";

export const signUpSlice = createSlice({
    name: 'signUp',
    initialState: {
        value: ''
    },
    reducers: {

    }
});

// export const {} = signUpSlice.actions;
export default signUpSlice.reducer;