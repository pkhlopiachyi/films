import { CommonError, UserInterface } from '../../types';
import { UserActions } from './';
import {
    LOGIN_DATA,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGOUT,
} from './constants';

export interface UserState {
    loading: boolean;
    userData?: UserInterface;
    error?: CommonError;
}

export const defaultUserState: UserState = {
    loading: false,
};

export const userReducer = (state = defaultUserState, action: UserActions) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: undefined,
            };
        case LOGIN_DATA:
            return {
                ...state,
                loading: false,
                userData: action.payload,
            };
        case LOGIN_ERROR:
            return {
                ...defaultUserState,
                error: action.payload,
            };
        case LOGOUT:
            return {
                ...defaultUserState,
            };
        default:
            return state;
    }
};
