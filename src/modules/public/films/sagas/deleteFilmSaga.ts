import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { buildQueryString } from '../../../../helpers/buildQueryString';
import { alertPush } from '../../../public/alert';
import { deleteFilmData, deleteFilmError, DeleteFilmFetch } from '../actions';


const filmConfig: RequestOptions = {
    apiVersion: 'film',
};

export function* deleteFilmSaga(action: DeleteFilmFetch) {
    try {
        const query = buildQueryString(action.payload);
        const { data } = yield call(API.delete(filmConfig), `/delete?${query}`);
        yield put(deleteFilmData(data));
        yield put(alertPush({ message: ['Film was deleted successfully'], type: 'success' }));
    } catch (error) {
        yield put(alertPush({ message: error.message, type: 'error' }));
        yield put(deleteFilmError(error));
    }
}
