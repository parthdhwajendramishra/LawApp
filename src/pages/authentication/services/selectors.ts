import { AuthState } from "../model/auth";
export const authSelected = (state: AuthState) => {
    return state.authSlice;
}
