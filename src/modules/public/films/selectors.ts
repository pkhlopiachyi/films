import { RootState } from '../../';
import { FilmState } from './reducer';

export const selectFilmsList = (state: RootState): FilmState['films'] =>
    state.public.film.films;

export const selectFilmsListLoading = (state: RootState): FilmState['loading'] =>
    state.public.film.loading;

export const selectFilmsListError = (state: RootState): FilmState['error'] =>
    state.public.film.error;

export const selectAddFilmSuccess = (state: RootState): FilmState['addFilmSuccess'] =>
    state.public.film.addFilmSuccess;

export const selectDeleteFilmSuccess = (state: RootState): FilmState['deleteFilmSuccess'] =>
    state.public.film.deleteFilmSuccess;

export const selcetUploadFilmsSuccess = (state: RootState): FilmState['uploadFilmsSuccess'] =>
    state.public.film.uploadFilmsSuccess;