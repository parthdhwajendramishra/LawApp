import { Logout } from "../../pages/common/logout";

interface HttpHeaders {
    Accept: string;
    authorization?: string
}

export interface ApiRequest<REQ> {
    reqAuthentication: boolean;
    apiUrl: string;
    data?: FormData;
    token?: string;
    content_type: string;
}

export const apiFileUploadRequest = async <REQ, RES>(request: ApiRequest<REQ>): Promise<RES> => {
    let headers: HttpHeaders = {
        Accept: "*/*",
        authorization: ""
    }

    if (request.reqAuthentication && request.token) {
        headers.authorization = "Bearer " + request.token;
    } else {
        headers.authorization = undefined;
    }

    let headers1 = JSON.parse(JSON.stringify(headers));

    const response: Response = await fetch(request.apiUrl, {
        method: "PUT",
        headers: headers1,
        body: (request.data)
    });
    return apiResponHandler(response, request);


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