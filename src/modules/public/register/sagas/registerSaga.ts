import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { alertPush } from '../../alert';
import { registerError, RegisterRequest, registerResponce } from '../actions';

const registerConfig: RequestOptions = {
    apiVersion: 'film',
};

export function* registerSaga(action: RegisterRequest) {
    try {
        const { data } = yield call(API.post(registerConfig), '/user/register', action.payload);
        yield put(registerResponce(data));
        yield put(alertPush({ message: ['You has been register successfully!'], type: 'success'}));
    } catch (error) {
        yield put(alertPush({ message: error.message, type: 'error' }));
        yield put(registerError(error));
    }
}
