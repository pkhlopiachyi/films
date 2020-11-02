import { act } from 'react-test-renderer';
import { CommonError, FilmInterface } from '../../types';
import * as actions from './actions';

describe('Film Actions', () => {
    const fakeError: CommonError = {
        code: 500,
        message: ['Server error'],
    };

    it('should check  film list fetch action', () => {
        const expectedAction = { type: 'FILM_LIST_FETCH' };
        expect(actions.fetchFilmList()).toEqual(expectedAction);
    });

    it('should check film list data action', () => {
        const fakeFilm: FilmInterface[] = [{
            _id: '',
            title: '',
            release_year: 1895,
            format: '',
            stars: '',
            image_link: '',
        }];
        const expectedAction = { type: 'FILM_LIST_DATA', payload: fakeFilm };

        expect(actions.filmListData(fakeFilm)).toEqual(expectedAction);
    });

    it('should check film list error action', () => {
        const expectedAction = {type: 'FILM_LIST_ERROR', payload: fakeError };
        expect(actions.filmListFetchError(fakeError)).toEqual(expectedAction);
    });

    it('should check film add action', () => {
        const fakePayload = {
            title: '',
            release_year: 1895,
            format: '',
            stars: '',
            image_link: '',
        };

        const expectedAction = { type: 'ADD_FILM_FETCH', payload: fakePayload };

        expect(actions.addFilm(fakePayload)).toEqual(expectedAction);
    });

    it('should check film add data', () => {
        const fakeFilm: FilmInterface = {
            _id: '',
            title: '',
            release_year: 1895,
            format: '',
            stars: '',
            image_link: '',
        };

        const expectedAction = { type: 'ADD_FILM_DATA', payload: fakeFilm };
        expect(actions.addFilmData(fakeFilm)).toEqual(expectedAction);
    });

    it('should check film add error action', () => {
        const expectedAction = {type: 'ADD_FILM_ERROR', payload: fakeError };
        expect(actions.addFilmError(fakeError)).toEqual(expectedAction);
    });

    it('should check film delete action', () => {
        const fakePayload = {
            _id: '',
        };

        const expectedAction = { type: 'DELETE_FILM_FETCH', payload: fakePayload };

        expect(actions.deleteFilm(fakePayload)).toEqual(expectedAction);
    });

    it('should check film delete data', () => {
        const fakeFilm: FilmInterface = {
            _id: '',
            title: '',
            release_year: 1895,
            format: '',
            stars: '',
            image_link: '',
        };

        const expectedAction = { type: 'DELETE_FILM_DATA', payload: fakeFilm };
        expect(actions.deleteFilmData(fakeFilm)).toEqual(expectedAction);
    });

    it('should check film detele error action', () => {
        const expectedAction = {type: 'DELETE_FILM_ERROR', payload: fakeError };
        expect(actions.deleteFilmError(fakeError)).toEqual(expectedAction);
    });

    it('should check film search action', () => {
        const fakePayload = {
            value: '',
        };

        const expectedAction = { type: 'SEARCH_FILM_FETCH', payload: fakePayload };

        expect(actions.searchFilm(fakePayload)).toEqual(expectedAction);
    });

    it('should check film search data', () => {
        const fakeFilm: FilmInterface[] = [{
            _id: '',
            title: '',
            release_year: 1895,
            format: '',
            stars: '',
            image_link: '',
        }];

        const expectedAction = { type: 'SEARCH_FILM_DATA', payload: fakeFilm };
        expect(actions.searchFilmData(fakeFilm)).toEqual(expectedAction);
    });

    it('should check film search error action', () => {
        const expectedAction = {type: 'SEARCH_FILM_ERROR', payload: fakeError };
        expect(actions.searchFilmError(fakeError)).toEqual(expectedAction);
    });

    it('should check film upload file action', () => {
        const fakePayload = new FormData();

        const expectedAction = { type: 'UPLOAD_FILM_LIST_FETCH', payload: fakePayload };

        expect(actions.fetchUploadFilmsList(fakePayload)).toEqual(expectedAction);
    });

    it('should check film upload file data', () => {
        const fakePayload = '';

        const expectedAction = { type: 'UPLOAD_FILM_LIST_DATA', payload: fakePayload };
        expect(actions.uploadFilmListData(fakePayload)).toEqual(expectedAction);
    });

    it('should check film upload file error action', () => {
        const expectedAction = {type: 'UPLOAD_FILM_LIST_ERROR', payload: fakeError };
        expect(actions.uploadFilmListError(fakeError)).toEqual(expectedAction);
    });

});
