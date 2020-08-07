import React from 'react';

const NotificationIcon = ({ type, style }) => {
    if (type === 'success') {
        return (
            <i class="fas fa-check-circle" style={style}></i>
        )
    }
    else if (type === 'info' || type === 'warning') {
        return (
            <i class="fas fa-info-circle" style={style}></i>
        )
    }
    else if (type === 'danger') {
        return (
            <i class="far fa-times-circle" style={style}></i>
        )
    }
    else {
        return(
            <div>

            </div>
        )
    }
}

export default NotificationIcon;