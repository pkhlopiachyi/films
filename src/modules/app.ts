import { combineReducers } from 'redux';
import { alertReducer } from './public/alert';
import { filmReducer } from './public/films';
import { userReducer } from './public/login';

export const publicReducer = combineReducers({
    alert: alertReducer,
    film: filmReducer,
});

export const privateReducer = combineReducers({
    user: userReducer,
});
