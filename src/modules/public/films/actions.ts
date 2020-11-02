import { CommonError, FilmInterface } from '../../types';
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
    UPLOAD_FILM_LIST_DATA,
    UPLOAD_FILM_LIST_ERROR,
    UPLOAD_FILM_LIST_FETCH,
} from './constants';

export interface FilmListFetch {
    type: typeof FILM_LIST_FETCH;
    payload?: {
        isAlphabet: boolean;
    };
}

export interface FilmListData {
    type: typeof FILM_LIST_DATA;
    payload: FilmInterface[];
}

export interface FilmListError {
    type: typeof FILM_LIST_ERROR;
    payload: CommonError;
}

export interface AddFilmFetch {
    type: typeof ADD_FILM_FETCH;
    payload: {
        title: string;
        release_year: number;
        format: string;
        stars: string;
        image_link?: string;
    };
}

export interface AddFilmData {
    type: typeof ADD_FILM_DATA;
    payload: FilmInterface;
}

export interface AddFilmError {
    type: typeof ADD_FILM_ERROR;
    payload: CommonError;
}

export interface DeleteFilmFetch {
    type: typeof DELETE_FILM_FETCH;
    payload: {
        _id: string;
    };
}

export interface DeleteFilmData {
    type: typeof DELETE_FILM_DATA;
    payload: FilmInterface;
}

export interface DeleteFilmError {
    type: typeof DELETE_FILM_ERROR;
    payload: CommonError;
}

export interface SearchFilmsFetch {
    type: typeof SEARCH_FILM_FETCH;
    payload: {
        value: string;
    };
}

export interface SearchFilmsData {
    type: typeof SEARCH_FILM_DATA;
    payload: FilmInterface[];
}

export interface SearchFilmFetchError {
    type: typeof SEARCH_FILM_ERROR;
    payload: CommonError;
}

export interface UploadFilmsListFetch {
    type: typeof UPLOAD_FILM_LIST_FETCH;
    payload: FormData;
}

export interface UploadFilmListData {
    type: typeof UPLOAD_FILM_LIST_DATA;
    payload: string;
}

export interface UploadFilmListError {
    type: typeof UPLOAD_FILM_LIST_ERROR;
    payload: CommonError;
}

export type FilmActions = FilmListFetch
    | FilmListData
    | FilmListError
    | AddFilmFetch
    | AddFilmData
    | AddFilmError
    | DeleteFilmFetch
    | DeleteFilmData
    | DeleteFilmError
    | SearchFilmsFetch
    | SearchFilmsData
    | SearchFilmFetchError
    | UploadFilmsListFetch
    | UploadFilmListData
    | UploadFilmListError;

export const fetchFilmList = (payload?: FilmListFetch['payload']): FilmListFetch => ({
    type: FILM_LIST_FETCH,
    payload,
});

export const filmListData = (payload: FilmListData['payload']): FilmListData => ({
    type: FILM_LIST_DATA,
    payload,
});

export const filmListFetchError = (payload: FilmListError['payload']): FilmListError => ({
    type: FILM_LIST_ERROR,
    payload,
});

export const addFilm = (payload: AddFilmFetch['payload']): AddFilmFetch => ({
    type: ADD_FILM_FETCH,
    payload,
});

export const addFilmData = (payload: AddFilmData['payload']): AddFilmData => ({
    type: ADD_FILM_DATA,
    payload,
});

export const addFilmError = (payload: AddFilmError['payload']): AddFilmError => ({
    type: ADD_FILM_ERROR,
    payload,
});

export const deleteFilm = (payload: DeleteFilmFetch['payload']): DeleteFilmFetch => ({
    type: DELETE_FILM_FETCH,
    payload,
});

export const deleteFilmData = (payload: DeleteFilmData['payload']): DeleteFilmData => ({
    type: DELETE_FILM_DATA,
    payload,
});

export const deleteFilmError = (payload: DeleteFilmError['payload']): DeleteFilmError => ({
    type: DELETE_FILM_ERROR,
    payload,
});

export const searchFilm = (payload: SearchFilmsFetch['payload']): SearchFilmsFetch => ({
    type: SEARCH_FILM_FETCH,
    payload,
});

export const searchFilmData = (payload: SearchFilmsData['payload']): SearchFilmsData => ({
    type: SEARCH_FILM_DATA,
    payload,
});

export const searchFilmError = (payload: SearchFilmFetchError['payload']): SearchFilmFetchError => ({
    type: SEARCH_FILM_ERROR,
    payload,
});

export const fetchUploadFilmsList = (payload: UploadFilmsListFetch['payload']): UploadFilmsListFetch => ({
    type: UPLOAD_FILM_LIST_FETCH,
    payload,
});

export const uploadFilmListData = (payload: UploadFilmListData['payload']): UploadFilmListData => ({
    type: UPLOAD_FILM_LIST_DATA,
    payload,
});

export const uploadFilmListError = (payload: UploadFilmListError['payload']): UploadFilmListError => ({
    type: UPLOAD_FILM_LIST_ERROR,
    payload,
});
