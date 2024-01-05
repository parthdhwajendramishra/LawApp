import { Logout } from "../../pages/common/logout";

interface HttpHeaders {
    accept: string;
    "content-type": string
    authorization?: string
}

export interface ApiRequest<REQ> {
    reqAuthentication: boolean;
    apiUrl: string;
    data?: REQ;
    token?: String;
    content_type: string
}

function apiResponHandler<REQ, RES>(res: Response, request: ApiRequest<REQ>): Promise<RES> {
    if (request.reqAuthentication && res.status == 401) {
        Logout("logout");
        return Promise.reject("");
    } else {
        if (!res.ok) {
            const error = res.json() || res.status;
            return Promise.reject(error);
        } else {
            const successss = res.json() as RES;
            return Promise.resolve(successss);
        }
    }
}

export const apiGetRequest = async <REQ, RES>(request: ApiRequest<REQ>): Promise<RES> => {

    let headers: HttpHeaders = {
        "accept": "*/*",
        "content-type": request.content_type,
        authorization: ""
    }

    if (request.reqAuthentication && request.token) {
        headers.authorization = "Bearer " + request.token;
    } else {
        headers.authorization = undefined;
    }

    let headers1 = JSON.parse(JSON.stringify(headers));
    const response: Response = await fetch(request.apiUrl, {
        method: "GET",
        headers: headers1
    });
    return apiResponHandler(response, request);
}