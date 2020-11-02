import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';
import { publicReducer } from './app';
import { AlertState, rootHandleAlertSaga } from './public/alert';
import { FilmState, rootFilmSaga } from './public/films';

export * from './public/alert';
export * from './public/films';
export * from './types';


export interface RootState {
    public: {
        alert: AlertState;
        film: FilmState,
    };
}

export const rootReducer = combineReducers({
    public: publicReducer,
});

export function* rootSaga() {
    yield all([
        call(rootFilmSaga),
        call(rootHandleAlertSaga),
    ]);
}
