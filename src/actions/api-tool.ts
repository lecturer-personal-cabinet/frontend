import axios, {AxiosRequestConfig, Method, AxiosResponse} from 'axios';

const API_HOST = process.env.REACT_APP_API_HOST;

const apiClient = axios.create({
    // baseURL: API_HOST,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    }
});

export type ApiRequestOptions = {
    endpoint: string,
    data: object,
    success: (f: AxiosResponse) => void,
    failure: () => void
};

const createRequest = (method: Method, requestOptions: ApiRequestOptions, options: AxiosRequestConfig = {}) => {
    console.log('ApiHost: ' + API_HOST);
    return apiClient({
        ...options,
        baseURL: API_HOST,
        method: method,
        url: requestOptions.endpoint,
        responseType: 'json',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(requestOptions.success)
        .catch(requestOptions.failure);
};

export const ApiRequest = class {
    static getWithoutAuth(requestOptions: ApiRequestOptions) {
        return createRequest('GET', requestOptions);
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
        console.log('POST');

        const updatedOptions = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            data: requestOptions.data,
        };
        return createRequest('POST', requestOptions, updatedOptions);
    }
};
