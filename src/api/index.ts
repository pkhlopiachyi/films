import { AxiosResponse } from 'axios';
import { JsonBody, makeRequest } from './requestBuilder';

export * from './types';
export * from './config';

export interface RequestOptions {
    apiVersion: 'film';
    withHeaders?: boolean;
    headers?: Object;
}

export type RequestBody = JsonBody | FormData;

export type RequestMethod = (config: RequestOptions) =>
    (url: string, body?: RequestBody) => Promise<AxiosResponse['data']>;

export interface ApiWrapper {
    get: RequestMethod;
    post: RequestMethod;
    delete: RequestMethod;
}

export const API: ApiWrapper = {
    get: (config: RequestOptions) => async (url: string) =>
        makeRequest({
            method: 'get',
            url,
        }, config),

    post: (config: RequestOptions) => async (url: string, body?: JsonBody) =>
        makeRequest({
            method: 'post',
            body,
            url,
        }, config),

    delete: (config: RequestOptions) => async (url: string, body?: JsonBody) =>
        makeRequest({
            method: 'delete',
            url,
        }, config),
};
