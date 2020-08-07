import { createSelector } from 'reselect';

const selectSystem = state => state.system;

export const selectSystemIsLoading = createSelector(
    [selectSystem],
    system =>  system.isLoading
);