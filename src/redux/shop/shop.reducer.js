import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    categories : null,
    isFetching: false,
    errorMessage: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.FETCH_CATEGORIES_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                isFetching: false
            }
        case ShopActionTypes.FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};

export default shopReducer;