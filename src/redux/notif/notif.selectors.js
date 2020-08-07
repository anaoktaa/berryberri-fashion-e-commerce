import { createSelector } from 'reselect';

const selectNotif = state => state.notif;

export const selectNotifProps = createSelector(
    [selectNotif],
    notif =>  notif.notifProps
);