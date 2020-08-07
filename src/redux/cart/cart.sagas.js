import { takeLatest, put, all, call, select } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import CartItemTypes from './cart.types';

import { clearCart, updateCartItemFromFire } from './cart.actions';
import { selectCurrentUser } from '../user/user.selectors';
import { updateCartItemsDocument, getCartItemsFromFirebase } from '../../firebase/firebase.utils';
import { selectCartItems } from './cart.selectors';


export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onUpdateFirebaseCart() {
    const currentUser = yield select(selectCurrentUser);
    if (currentUser) {
      try {
        const cartRef = yield updateCartItemsDocument(currentUser.id);
        const cartItems = yield select(selectCartItems);
        yield cartRef.update({ cartItems });
      } catch (error) {
        console.log(error);
      }
    }
}

export function* getCartItems() {
    const currentUser = yield select(selectCurrentUser);
    const cartRef = yield call(getCartItemsFromFirebase, currentUser.id);
    yield put(updateCartItemFromFire(!cartRef.cartItems? [] : cartRef.cartItems));
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onCartChange() {
    yield takeLatest([
        CartItemTypes.ADD_ITEM,
        CartItemTypes.CLEAR_ITEM_FROM_CART,
        CartItemTypes.REMOVE_ITEM_FROM_CART
    ], onUpdateFirebaseCart)
}

export function* onSignInSuccess() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, getCartItems)
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess),
        call(onCartChange),
        call(onSignInSuccess)
    ]);
} 