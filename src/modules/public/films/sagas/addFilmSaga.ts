import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { addFilmData, addFilmError, AddFilmFetch } from '../actions';

const filmConfig: RequestOptions = {
    apiVersion: 'film',
};

export function* addFilmSaga(action: AddFilmFetch) {
    try {
        const { data } = yield call(API.post(filmConfig), '/add', action.payload)
        yield put(addFilmData(data));

    } catch (error) {
        yield put(addFilmError(error));
    }
}