import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';
import { privateReducer, publicReducer } from './app';
import { AlertState, rootHandleAlertSaga } from './public/alert';
import { FilmState, rootFilmSaga } from './public/films';
import { rootLoginSaga, UserState } from './public/login';
import { RegisterState, rootRegisterSaga } from './public/register';

export * from './public/alert';
export * from './public/films';
export * from './public/login';
export * from './public/register';
export * from './types';


export interface RootState {
    public: {
        alert: AlertState;
        film: FilmState,
    };
    private: {
        user: UserState;
        register: RegisterState;
    };
}

export const rootReducer = combineReducers({
    public: publicReducer,
    private: privateReducer,
});

export function* rootSaga() {
    yield all([
        call(rootFilmSaga),
        call(rootHandleAlertSaga),
        call(rootLoginSaga),
        call(rootRegisterSaga),
    ]);
}
