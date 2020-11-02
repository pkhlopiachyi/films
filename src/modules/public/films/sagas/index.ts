import { takeEvery } from 'redux-saga/effects';
import { ADD_FILM_FETCH, DELETE_FILM_FETCH, FILM_LIST_FETCH, SEARCH_FILM_FETCH, UPLOAD_FILM_LIST_FETCH } from '../constants';
import { addFilmSaga } from './addFilmSaga';
import { deleteFilmSaga } from './deleteFilmSaga';
import { fetchFilmsSaga } from './fetchFilmListSaga';
import { searchFilmSaga } from './searchFilmSaga';
import { uploadFilmSaga } from './uploadFilmsSaga';

export function* rootFilmSaga() {
    yield takeEvery(FILM_LIST_FETCH, fetchFilmsSaga);
    yield takeEvery(ADD_FILM_FETCH, addFilmSaga);
    yield takeEvery(DELETE_FILM_FETCH, deleteFilmSaga);
    yield takeEvery(SEARCH_FILM_FETCH, searchFilmSaga);
    yield takeEvery(UPLOAD_FILM_LIST_FETCH, uploadFilmSaga);
}
