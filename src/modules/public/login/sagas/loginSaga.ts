import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { alertPush } from '../../../public/alert';
import { loginError, LoginRequest, userData } from '../actions';

const loginConfig: RequestOptions = {
    apiVersion: 'film',
};

export function* loginSaga(action: LoginRequest) {
    try {
        const { data } = yield call(API.post(loginConfig), '/user/login', action.payload);
        yield put(userData(data));
    } catch (error) {
        yield put(alertPush({ message: error.message, type: 'error' }));
        yield put(loginError(error));
    }
}
