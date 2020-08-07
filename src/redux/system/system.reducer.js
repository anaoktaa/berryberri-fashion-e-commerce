import SystemActionTypes from './system.types';

const INITIAL_STATE = {
    isLoading : false
};

const systemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SystemActionTypes.START_IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case SystemActionTypes.STOP_IS_LOADING:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
};

export default systemReducer;