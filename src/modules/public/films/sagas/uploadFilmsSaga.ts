import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { alertPush } from '../../alert';
import { uploadFilmListError, UploadFilmsListFetch } from '../actions';

const filmConfig: RequestOptions = {
    apiVersion: 'film',
};

export function* uploadFilmSaga(action: UploadFilmsListFetch) {
    try {
        yield call(API.post(filmConfig), '/upload', action.payload);
        yield put(alertPush({ message: ['File was uploaded succefully'], type: 'success' }));
    } catch (error) {
        yield put(alertPush({ message: error.message, type: 'error' }));
        yield put(uploadFilmListError(error));
    }
}
