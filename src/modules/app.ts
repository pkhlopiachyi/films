import { combineReducers } from 'redux';
import { alertReducer } from './public/alert';
import { filmReducer } from './public/films';

export const publicReducer = combineReducers({
    alert: alertReducer,
    film: filmReducer,
});
