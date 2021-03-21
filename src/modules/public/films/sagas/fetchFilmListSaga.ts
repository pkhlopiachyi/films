import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { alertPush } from '../../../public/alert';
import { filmListData, FilmListFetch, filmListFetchError } from '../actions';

const filmConfig: RequestOptions = {
    apiVersion: 'film',
};

export function* fetchFilmsSaga(action: FilmListFetch) {
    try {
        let list = [];

        // tslint:disable-next-line:prefer-conditional-expression
        if (action.payload && action.payload.isAlphabet){
            list = yield call(API.get(filmConfig), '/film/alphabet');
        } else {
            list = yield call(API.get(filmConfig), '/film');
        }

        yield put(filmListData(list.data));
    } catch (error) {
        yield put(alertPush({ message: error.message, type: 'error' }));
        yield put(filmListFetchError(error));
    }
}
