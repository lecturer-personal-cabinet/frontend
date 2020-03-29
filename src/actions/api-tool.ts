import axios, {AxiosRequestConfig, AxiosResponse, Method} from 'axios';

const API_HOST = process.env.REACT_APP_API_HOST;

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
    failure: () => void
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
        const updatedOptions = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            data: requestOptions.data,
        };
        return createRequest('POST', requestOptions, updatedOptions);
    }
};
