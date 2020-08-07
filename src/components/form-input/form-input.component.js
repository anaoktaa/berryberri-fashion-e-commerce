import React from 'react';

import './form-input.styles.css';

const FormInput = ({handleChange, label, labelColor, ...otherProps}) => (
    <div className='form-input-group-container'>
        <label style={{color: labelColor}} className='label-input'>{label}</label>
        <input className='form-input-container' {...otherProps}></input>
    </div>
);

export default FormInput;
