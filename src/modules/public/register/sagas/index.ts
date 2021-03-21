import { takeEvery } from 'redux-saga/effects';
import { REGISTER_REQUEST } from '../constants';
import { registerSaga } from './registerSaga';

export function* rootRegisterSaga() {
    yield takeEvery(REGISTER_REQUEST, registerSaga);
}
