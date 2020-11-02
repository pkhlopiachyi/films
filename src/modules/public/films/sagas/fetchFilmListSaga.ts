import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { alertPush } from '../../../public/alert';
import { filmListData, FilmListFetch, filmListFetchError } from '../actions';

const filmConfig: RequestOptions = {
    apiVersion: 'film',
};

export function* fetchFilmsSaga(action: FilmListFetch) {
    try {
        const list = action.payload && action.payload.isAlphabet ?
            yield call(API.get(filmConfig), '/alphabet') : yield call(API.get(filmConfig), '/');

        yield put(filmListData(list.data));
    } catch (error) {
        yield put(alertPush({ message: error.message, type: 'error' }));
        yield put(filmListFetchError(error));
    }
}
