import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { buildQueryString } from '../../../../helpers/buildQueryString';
import { searchFilmData, searchFilmError, SearchFilmsFetch } from '../actions';

const filmConfig: RequestOptions = {
    apiVersion: 'film',
};

export function* searchFilmSaga(action: SearchFilmsFetch) {
    try {
        const query = buildQueryString(action.payload);
        const { data } = yield call(API.get(filmConfig), `/search?${query}`);

        yield put(searchFilmData(data));
    } catch (error) {
        yield put(searchFilmError(error));
    }
}