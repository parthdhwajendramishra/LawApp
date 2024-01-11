import { apiGetRequest } from "../../../utils/api/get";
import { apiPostRequest } from "../../../utils/api/post";
import { SignInRequestDto, SignInResponseDto } from "../model/auth";



const API_URL = process.env.REACT_APP_AUTH_API_URL || "";

//API CALLS
export const signinAPI = (data: SignInRequestDto): Promise<SignInResponseDto> => apiPostRequest({
    reqAuthentication: true,
    apiUrl: API_URL + 'auth/signin',
    data: data,
    content_type: 'application/json',
});
