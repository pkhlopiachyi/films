import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { filmListData, filmListFetchError, FilmListFetch } from '../actions';

const filmConfig: RequestOptions = {
    apiVersion: 'film',
};

export function* fetchFilmsSaga(action: FilmListFetch) {
    try {
        let list;
        if (action.payload && action.payload.isAlphabet) {
            list = yield call(API.get(filmConfig), '/alphabet');
        } else {
            list = yield call(API.get(filmConfig), '/')
        }
        yield put(filmListData(list.data));
    } catch (error) {
        yield put(filmListFetchError(error));
    }
}