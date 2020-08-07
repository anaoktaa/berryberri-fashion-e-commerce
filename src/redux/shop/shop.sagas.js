import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCategoriesSnapshotToMap } from '../../firebase/firebase.utils';

import ShopActionTypes from './shop.types';
import { fetchCategoriesFailure, fetchCategoriesSuccess } from './shop.actions';

export function* fetchCategoriesAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const categoriesMap = yield call(convertCategoriesSnapshotToMap, snapshot);
        yield put(fetchCategoriesSuccess(categoriesMap));
    } catch(error) {

        yield put(fetchCategoriesFailure(error.message))
    }
}

export function* fetchCategoriesStart() {
    yield takeLatest(ShopActionTypes.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* shopSagas() {
    yield all([
        call(fetchCategoriesStart)
    ]);
}