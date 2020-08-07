import { takeLatest, put, call, all } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import { startIsLoading, stopIsLoading } from './system.actions';
import { setNotifShow } from '../notif/notif.actions';

export function* signStart() {
    yield put(startIsLoading());
}

export function* signFailure({payload}) {
    const data = {
        message: payload,
        show: true,
        title: "Error",
        type: "danger"
    }
    yield put(stopIsLoading());
    yield put(setNotifShow(data));
}

export function* signSuccess() {
    yield put(stopIsLoading());   
}

export function* onSignInEmailStart () {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signStart);
}

export function* onSignInGoogleStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signStart);
}

export function* onSignInSuccess() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, signSuccess)
}

export function* onSignInFailure () {
    yield takeLatest(UserActionTypes.SIGN_IN_FAILURE, signFailure);
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signStart);
}

export function* onSignUpFailure() {
    yield takeLatest(UserActionTypes.SIGN_UP_FAILURE, signFailure);
}

export function* systemSaga() {
    yield all([
        call(onSignInEmailStart),
        call(onSignInFailure),
        call(onSignInGoogleStart),
        call(onSignInSuccess),
        call(onSignUpStart),
        call(onSignUpFailure),
    ])
}

