import { SECTIONS_DATA, ALL_BRANDS_DATA, BEST_SELLER, BILLBOARD_LIST } from './directory.data';

const INITIAL_STATE = {
    categories: SECTIONS_DATA,
    brands: ALL_BRANDS_DATA,
    bestSeller: BEST_SELLER,
    billboardList: BILLBOARD_LIST
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;