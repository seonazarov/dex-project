import { configureStore } from '@reduxjs/toolkit';
import { signInSlice } from "./signInSlice";
import { signUpSlice } from "./signUpSlice";

export default configureStore({
   reducer: {
       signIn: signInSlice.reducer,
       signUp: signUpSlice.reducer,
   }
});