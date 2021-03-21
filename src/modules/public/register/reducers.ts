import { CommonError, RequestResponce } from '../../types';
import { RegisterActions } from './';
import { REGISTER_DATA, REGISTER_ERROR, REGISTER_REQUEST } from './constants';

export interface RegisterState {
    loading: boolean;
    registerResponce?: RequestResponce;
    error?: CommonError;
}

export const defaultState: RegisterState = {
    loading: false,
};

export const registerReducer = (state = defaultState, action: RegisterActions) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
                error: undefined,
            };
        case REGISTER_DATA:
            return {
                ...state,
                registerResponce: action.payload,
            };
        case REGISTER_ERROR:
            return {
                ...defaultState,
                error: action.payload,
            };
        default:
            return state;
    }
};
