import NotifActionTypes from './notif.types';

export const setNotifShow = (data) => ({
    type: NotifActionTypes.SET_NOTIF_SHOW,
    payload: data
});

export const setNotifClose = () => ({
    type: NotifActionTypes.SET_NOTIF_CLOSE
})