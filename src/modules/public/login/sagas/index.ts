import { takeEvery } from 'redux-saga/effects';
import { LOGIN_REQUEST } from '../constants';
import { loginSaga } from './loginSaga';

export function* rootLoginSaga() {
    yield takeEvery(LOGIN_REQUEST, loginSaga);
}
