import { AlertState, RootState } from '../../';

export const selectAlertState = (state: RootState): AlertState => state.public.alert;
