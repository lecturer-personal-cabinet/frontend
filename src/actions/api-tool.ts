import axios, {AxiosRequestConfig, AxiosResponse, Method} from 'axios';

export const API_HOST = process.env.REACT_APP_API_HOST;

const apiClient = axios.create({
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    }
});

export type ApiRequestOptions = {
    endpoint: string,
    data: object,
    success: (f: AxiosResponse) => void,
    failure: (error: any) => void
};

const createRequest = (method: Method, requestOptions: ApiRequestOptions, options: AxiosRequestConfig = {}) => {
    return apiClient({
        ...options,
        baseURL: API_HOST,
        method: method,
        url: requestOptions.endpoint,
        responseType: 'json',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    }).then(requestOptions.success)
        .catch(error => {
            if(error['response']) {
                requestOptions.failure(error);
            } else {
                console.log("Most likely a server timeout or an internet connection error");
                console.log("error response property is undefined")
            }
        })
};

export const ApiRequest = class {
    static getWithoutAuth(requestOptions: ApiRequestOptions) {
        return createRequest('GET', requestOptions);
    }

    static withoutAuth(method: Method, endpoint: string, data?: object) {
        return ApiRequest.apiCall(method, endpoint, false, data);
    }

    static withAuth(method: Method, endpoint: string, data?: object) {
        const additionalHeaders = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        };
        return ApiRequest.apiCall(method, endpoint, true, data, additionalHeaders)
    }

    private static apiCall(method: Method, endpoint: string, withAuth: boolean, data?: object, headers?: object) {
        return apiClient({
            baseURL: API_HOST,
            method: method,
            url: endpoint,
            responseType: 'json',
            headers: {
                ...headers,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...(withAuth && {'Authorization': `Bearer ${localStorage.getItem('token')}`}),
            },
            data,
        });
    }

    static postWithoutAuth(requestOptions: ApiRequestOptions) {
        const updatedOptions = {
            data: requestOptions.data
        };

        return createRequest('POST', requestOptions, updatedOptions);
    }

    static getWithAuth(requestOptions: ApiRequestOptions) {
        const updatedOptions = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        };
        return createRequest('GET', requestOptions, updatedOptions);
    }

    static postWithAuth(requestOptions: ApiRequestOptions) {
        const updatedOptions = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            data: requestOptions.data,
        };
        return createRequest('POST', requestOptions, updatedOptions);
    }
};
