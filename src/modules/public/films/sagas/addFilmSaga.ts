import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { alertPush } from '../../../public/alert';
import { addFilmData, addFilmError, AddFilmFetch } from '../actions';

const filmConfig: RequestOptions = {
    apiVersion: 'film',
};

export function* addFilmSaga(action: AddFilmFetch) {
    try {
        const { data } = yield call(API.post(filmConfig), '/add', action.payload);
        yield put(addFilmData(data));
        yield put(alertPush({ message: ['Film was added successfully'], type: 'success' }));
    } catch (error) {
        yield put(alertPush({ message: error.message, type: 'error' }));
        yield put(addFilmError(error));
    }
}
