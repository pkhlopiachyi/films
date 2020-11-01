import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';
import { publicReducer } from './app';
import { FilmState, rootFilmSaga } from './public/films';

export * from './public/films';
export * from './types';


export interface RootState {
    public: {
        film: FilmState,
    };
}

export const rootReducer = combineReducers({
    public: publicReducer,
});

export function* rootSaga() {
    yield all([
        call(rootFilmSaga),
    ]);
}
