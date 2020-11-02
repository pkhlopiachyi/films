import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { uploadFilmListError, UploadFilmsListFetch } from '../actions';

const filmConfig: RequestOptions = {
    apiVersion: 'film',
};

export function* uploadFilmSaga(action: UploadFilmsListFetch) {
    try {
        const data= yield call(API.post(filmConfig), '/upload', action.payload);
        // yield put(uploadFilmListData(data));
        window.console.log(data);

    } catch (error) {
        yield put(uploadFilmListError(error));
    }
}
