import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { buildQueryString } from '../../../../helpers/buildQueryString';
import { deleteFilmData, deleteFilmError, DeleteFilmFetch } from '../actions';

const filmConfig: RequestOptions = {
    apiVersion: 'film',
};

export function* deleteFilmSaga(action: DeleteFilmFetch) {
    try {
        const query = buildQueryString(action.payload);
        const { data } = yield call(API.delete(filmConfig), `/delete?${query}`)
        yield put(deleteFilmData(data));

    } catch (error) {
        yield put(deleteFilmError(error));
    }
}