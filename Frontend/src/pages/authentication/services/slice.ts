import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignInResponseDto, SignUpResponseDto } from "../model/auth";

type InitialData = {
    signIn: SignInResponseDto | any,
    signUp: SignUpResponseDto | any,
    toggleValue: number
};
const initialState: InitialData = {
    signIn: null,
    signUp: null,
    toggleValue: 0
};
const slice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        signinSuccess: (
            state,
            action: PayloadAction<Object>
        ) => {
            state.signIn = action.payload;
        },

        signinFailed: (
            state,
            action: PayloadAction<any>
        ) => {
            state.signIn = Array.isArray(action.payload.errors) && action.payload.errors[0].length > 0 ? action.payload.errors[0] : 'Something went wrong. Please try again';
        },

        signupSuccess: (
            state,
            action: PayloadAction<Object>
        ) => {
            state.signUp = action.payload;

        },
        signupFailed: (state, action: PayloadAction<any>) => {
            state.signUp = Array.isArray(action.payload.errors) && action.payload.errors[0].length > 0 ? action.payload.errors[0] : 'Something went wrong. Please try again';

        }


    }
})
export const authSlice = slice.reducer;
export const {
    signinSuccess,
    signinFailed
} = slice.actions;