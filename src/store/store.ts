import {
  configureStore,
  ThunkAction,
  Action
} from "@reduxjs/toolkit";
//import logger from "redux-logger";
import { RootState } from "../utils/type";
import { authSlice } from "../pages/authentication/services/slice";


//const middleware = [...getDefaultMiddleware(), logger];
export const store = configureStore({
  reducer: {
    authSlice
  },

});
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>