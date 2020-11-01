import { CommonError, FilmInterface } from '../../types';
import { FilmActions } from './actions';
import {
    ADD_FILM_DATA,
    ADD_FILM_ERROR,
    ADD_FILM_FETCH,
    DELETE_FILM_DATA,
    DELETE_FILM_ERROR,
    DELETE_FILM_FETCH,
    FILM_LIST_DATA,
    FILM_LIST_ERROR,
    FILM_LIST_FETCH,
    SEARCH_FILM_DATA,
    SEARCH_FILM_ERROR,
    SEARCH_FILM_FETCH,
} from './constants';

export interface FilmState {
    loading: boolean;
    films: FilmInterface[];
    error?: CommonError;
    addFilmSuccess: boolean;
    deleteFilmSuccess: boolean;
}

const defaultFilmState: FilmState = {
    loading: false,
    films: [],
    addFilmSuccess: false,
    deleteFilmSuccess: false,
};

export const filmReducer = (state = defaultFilmState, action: FilmActions) => {
    switch (action.type) {
        case FILM_LIST_FETCH:
            return {
                ...state,
                loading: true,
            };
        case FILM_LIST_DATA:
            return {
                ...state,
                loading: false,
                films: action.payload,
            };
        case FILM_LIST_ERROR:
            return {
                ...state,
                films: [],
                error: action.payload,
                loading: false,
            };
        case ADD_FILM_FETCH:
            return {
                ...state,
                loading: true,
                addFilmSuccess: false,
            };
        case ADD_FILM_DATA:
            return {
                ...state,
                loading: false,
                films: [...state.films, action.payload],
                addFilmSuccess: true,
            };
        case ADD_FILM_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
                addFilmSuccess: false,
            };
        case DELETE_FILM_FETCH:
            return {
                ...state,
                loading: true,
                deleteFilmSuccess: false,
            };
        case DELETE_FILM_DATA:
            return {
                ...state,
                loading: true,
                films: state.films.filter(film => film._id !== action.payload._id),
                deleteFilmSuccess: true,
            };
        case DELETE_FILM_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                deleteFilmSuccess: false,
            };
        case SEARCH_FILM_FETCH:
            return {
                ...state,
                loading: true,
            };
        case SEARCH_FILM_DATA:
            return {
                ...state,
                films: action.payload,
                loading: false,
            };
        case SEARCH_FILM_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}