import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectBestSeller = createSelector(
    [selectDirectory],
    directory => directory.bestSeller
);

export const selectBrands = createSelector(
    [selectDirectory],
    directory => directory.brands
);

export const selectCategories = createSelector(
    [selectDirectory],
    directory => directory.categories
);

export const selectBillboardList = createSelector(
    [selectDirectory],
    directory => directory.billboardList
);