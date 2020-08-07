import React from 'react';

import './increment-button.styles.css';

const IncrementButton = (props) => (
    <div className='increment-decrement-button-container'>
        <div className='decrement-container' onClick={() => props.handleDecrement(props.item)}>
            <p>-</p>
        </div>
        <div className='total-container'>
            <p>{props.quantity}</p>
        </div>
        <div className='increment-container' onClick={() => props.handleIncrement(props.item)}>
            <p>+</p>
        </div>
    </div>
);

export default IncrementButton;