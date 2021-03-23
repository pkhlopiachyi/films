import { CommonError, RequestResponce } from '../../types';
import { REGISTER_DATA, REGISTER_ERROR, REGISTER_REQUEST } from './constants';


export interface RegisterRequest {
    type: typeof REGISTER_REQUEST;
    payload: {
        email: string;
        password: string;
        username: string;
        birthday: string;
        gender: string;
    };
}

export interface RegisterResponce {
    type: typeof REGISTER_DATA;
    payload: RequestResponce;
}

export interface RegisterError {
    type: typeof REGISTER_ERROR;
    payload: CommonError;
}

export type RegisterActions = RegisterRequest
    | RegisterResponce
    | RegisterError;

export const register = (payload: RegisterRequest['payload']): RegisterRequest => ({
    type: REGISTER_REQUEST,
    payload,
});

export const registerResponce = (payload: RegisterResponce['payload']): RegisterResponce => ({
    type: REGISTER_DATA,
    payload,
});

export const registerError = (payload: RegisterError['payload']): RegisterError => ({
    type: REGISTER_ERROR,
    payload,
});
