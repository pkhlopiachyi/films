import { CommonError, UserInterface } from '../../types';
import {
    LOGIN_DATA,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGOUT,
} from './constants';

export interface LoginRequest {
    type: typeof LOGIN_REQUEST;
    payload: {
        email: string;
        password: string;
    };
}

export interface UserData {
    type: typeof LOGIN_DATA;
    payload: UserInterface;
}

export interface LoginError {
    type: typeof LOGIN_ERROR;
    payload: CommonError;
}

export interface Logout {
    type: typeof LOGOUT;
}

export type UserActions = LoginRequest
    | UserData
    | LoginError
    | Logout;

export const login = (payload: LoginRequest['payload']): LoginRequest => ({
    type: LOGIN_REQUEST,
    payload,
});

export const userData = (payload: UserData['payload']): UserData => ({
    type: LOGIN_DATA,
    payload,
});

export const loginError = (payload: LoginError['payload']): LoginError => ({
    type: LOGIN_ERROR,
    payload,
});

export const logout = (): Logout => ({
    type: LOGOUT,
});
