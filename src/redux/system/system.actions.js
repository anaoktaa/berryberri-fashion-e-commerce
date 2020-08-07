import SystemActionTypes from './system.types';

export const startIsLoading = () => ({
    type: SystemActionTypes.START_IS_LOADING
});

export const stopIsLoading = () => ({
    type: SystemActionTypes.STOP_IS_LOADING
});