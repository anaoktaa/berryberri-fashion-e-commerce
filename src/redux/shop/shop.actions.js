import ShopActionTypes from './shop.types';

export const fetchCategoriesStart = () => ({
    type: ShopActionTypes.FETCH_CATEGORIES_START
});

export const fetchCategoriesSuccess = (categories) => ({
    type: ShopActionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: categories
});

export const fetchCategoriesFailure = (errorMsg) => ({
    type: ShopActionTypes.FETCH_CATEGORIES_FAILURE,
    payload: errorMsg
});