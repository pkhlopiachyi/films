import { CommonError, FilmInterface } from '../../types';
import * as actions from './actions';
import { defaultFilmState, filmReducer } from './reducer';

describe('Film reducer', () => {
    const error: CommonError = {
        code: 500,
        message: ['Server error'],
    };

    it('should handle FILM_LIST_FETCH', () => {
        const expectedState = {
            ...defaultFilmState,
            loading: true,
        };

        expect(filmReducer(
            defaultFilmState,
            actions.fetchFilmList(),
        )).toEqual(expectedState);
    });

    it('should hande FILM_LIST_DATA', () => {
        const fakeFilm: FilmInterface[] = [{
            _id: '',
            title: '',
            release_year: 1895,
            format: '',
            stars: '',
            image_link: '',
        }];

        const expectedState = {
            ...defaultFilmState,
            loading: false,
            films: fakeFilm,
        };

        expect(filmReducer(
            defaultFilmState,
            actions.filmListData(fakeFilm),
        )).toEqual(expectedState);
    });

    it('should handle FILM_LIST_ERROR', () => {
        const expectedState = {
            ...defaultFilmState,
            films: [],
            error: error,
            loading: false,
        };

        expect(filmReducer(
            defaultFilmState,
            actions.filmListFetchError(error),
        )).toEqual(expectedState);
    });

    it('should handle ADD_FILM_FETCH', () => {
        const expectedState = {
            ...defaultFilmState,
            loading: true,
            addFilmSuccess: false,
        };

        const fakePayload = {
            title: '',
            release_year: 1895,
            format: '',
            stars: '',
            image_link: '',
        };

        expect(filmReducer(
            defaultFilmState,
            actions.addFilm(fakePayload),
        )).toEqual(expectedState);
    });

    it('should handle ADD_FILM_DATA', () => {
        const fakePayload = {
            _id: '',
            title: '',
            release_year: 1895,
            format: '',
            stars: '',
            image_link: '',
        };

        const expectedState = {
            ...defaultFilmState,
            loading: false,
            films: [...defaultFilmState.films, fakePayload],
            addFilmSuccess: true,
        };

        expect(filmReducer(
            defaultFilmState,
            actions.addFilmData(fakePayload),
        )).toEqual(expectedState);
    });

    it('should handle ADD_FILM_ERROR', () => {
        const expectedState = {
            ...defaultFilmState,
            error: error,
            loading: false,
            addFilmSuccess: false,
        };

        expect(filmReducer(
            defaultFilmState,
            actions.addFilmError(error),
        )).toEqual(expectedState);
    });
});
