import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCategories = createSelector(
    [selectShop],
    shop => shop.categories
);

export const selectCategory = categoryUrlParam => createSelector(
    [selectCategories],
    categories => categories[categoryUrlParam]
);

export const selectCategoryForPreview = createSelector(
    [selectCategories],
    categories => categories ? Object.keys(categories).map(key => categories[key]) : []
);

export const selectIsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCategoriesLoaded = createSelector(
    [selectShop],
    shop => (!Boolean(shop.categories))
);