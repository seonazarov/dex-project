import { createSlice } from "@reduxjs/toolkit";

export const signInSlice = createSlice({
    name: 'signIn',
    initialState: {
        currentUser: {},
        token: '',
        isAuth: false
    },
    reducers: {
        isUser: (state, data) => {
            state.currentUser = data.payload;
        },
        isToken: (state, data) => {
            state.token = data.payload;
            
        },
        authorized: (state, data) => {
            if (data.payload !== {}) state.isAuth = true;
        },
        logOut: (state, data) => {
            if (data.payload === false) {
                state.isAuth = false;
                state.currentUser = {};
                state.token = '';
            }
        }
    }
});

export const { isUser, isToken, authorized, logOut } = signInSlice.actions;
export const selectCurrentUser = (state: any) => state.signIn.currentUser;
export const selectToken = (state: any) => state.signIn.token;
export const selectIsAuth = (state: any) => state.signIn.isAuth;
export default signInSlice.reducer;