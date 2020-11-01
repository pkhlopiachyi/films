import axios, {
    AxiosError,
    AxiosPromise,
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios';
import { apiUrl } from './config';

export type HTTPMethod =
    'get'
    | 'post'
    | 'delete';

export interface JsonBody {
    [key: string]: any;
}

export interface RequestOptions {
    apiVersion: 'film';
    withHeaders?: boolean;
    headers?: Object;
}

export interface Request {
    method: HTTPMethod;
    url: string;
    body?: JsonBody;
}

export interface ApiVariety {
    api: string;
}

const getAPI = () => ({
    film: apiUrl(),
});

const buildRequest = (request: Request, configData: RequestOptions) => {
    const { body, method, url } = request;
    const { apiVersion, headers } = configData;
    const api = getAPI();

    const contentType = body instanceof FormData
        ? 'multipart/form-data'
        : 'application/json';

    const defaultHeaders = {
        'content-type': contentType,
    };

    const apiRequestUrl = api[apiVersion];

    const requestConfig: AxiosRequestConfig = {
        baseURL: apiRequestUrl,
        data: body,
        headers: { ...headers, ...defaultHeaders },
        method,
        url,
    };

    return requestConfig;
};

export const defaultResponse: Partial<AxiosError['response']> = {
    status: 500,
    data: {
        error: 'Server error',
    },
};

export const formatError = (responseError: AxiosError) => {
    const response = responseError.response || defaultResponse;
    const errors = (response.data && (response.data.errors || [response.data.error])) || [];

    return {
        code: response.status,
        message: errors,
    };
};

export const makeRequest = async (request: Request, configData: RequestOptions) => {
    const requestConfig = buildRequest(request, configData);

    return new Promise((resolve, reject) => {
        const axiosRequest: AxiosPromise = axios(requestConfig);
        axiosRequest
            .then((response: AxiosResponse) => {
                if (configData.withHeaders) {
                    resolve(response);
                } else {
                    resolve(response.data);
                }
            })
            .catch((error: AxiosError) => {
                reject(formatError(error));
            });
    });
};
