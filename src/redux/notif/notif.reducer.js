import NotifActionTypes from './notif.types';

const INITIAL_STATE = {
    notifProps : {
        type: null,
        title: null,
        message: null,
        show: false
    }
};

const notifReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case NotifActionTypes.SET_NOTIF_SHOW:
            return {
                ...state,
                notifProps: {
                    type: action.payload.type,
                    title: action.payload.title,
                    message: action.payload.message,
                    show: action.payload.show
                }
            }
        case NotifActionTypes.SET_NOTIF_CLOSE:
            return {
                ...state,
                notifProps: {
                    type: null,
                    title: null,
                    message: null,
                    show: false
                }
            }
        default:
            return state;
    }
}

export default notifReducer;