import { createSlice } from "@reduxjs/toolkit";

export const signInSlice = createSlice({
    name: 'signIn',
    initialState: {
        currentUser: {},
        isAuth: false
    },
    reducers: {
        signInToken: (state, data) => {
            let token = data.payload;
            console.log(token);

            if (token !== ''){
                console.log("Пользователь Найден!");

            }
        }
    }
});

export const { signInToken } = signInSlice.actions;
export const selectCurrentUser = (state: any) => state.signIn.currentUser;
export const selectIsAuth = (state: any) => state.signIn.isAuth;
export default signInSlice.reducer;