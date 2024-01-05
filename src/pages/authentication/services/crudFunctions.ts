import { AppThunk } from "../../../store/store";
import {
    signinSuccess,
    signinFailed
} from "./slice";
import { signinAPI } from "./api";
import { SignInRequestDto, SignInResponseDto } from "../model/auth";
import { DummySignin } from "../../../utils/dummy_data/dummyService";

export const getSignin = (Data: SignInRequestDto): AppThunk => async (dispatch) => {
    try {
        console.log('I am trying', Data);
        const ApisData: SignInResponseDto = await signinAPI(Data);
        dispatch(signinSuccess(ApisData));
    } catch (err) {
        const x: any = await DummySignin(Data.username, Data.password);
        dispatch(signinSuccess(x));
        console.log('Data is ', x)
        //dispatch(signinFailed(err));
    }
}