import { configureStore } from '@reduxjs/toolkit';
import { signInSlice } from "./signInSlice";
import { signUpSlice } from "./signUpSlice";
import { burgerSlice } from "./burgerSlise";
import { paginationSlice } from "./paginationSlice";
import { selPageSlice } from "./selectPageSlice";

export default configureStore({
   reducer: {
       signIn: signInSlice.reducer,
       signUp: signUpSlice.reducer,
       burger: burgerSlice.reducer,
       pagination: paginationSlice.reducer,
       selected: selPageSlice.reducer,
   }
});