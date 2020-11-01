import { combineReducers } from 'redux';
import { filmReducer } from './public/films';

export const publicReducer = combineReducers({
    film: filmReducer,
});
