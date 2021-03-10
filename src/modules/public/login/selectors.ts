import { RootState } from '../../';
import { UserState } from './';

export const selectUserLoading = (state: RootState): UserState['loading'] =>
    state.private.user.loading;

export const selectUserData = (state: RootState): UserState['userData'] =>
    state.private.user.userData;

export const selectUserLoginError = (state: RootState): UserState['error'] =>
    state.private.user.error;
