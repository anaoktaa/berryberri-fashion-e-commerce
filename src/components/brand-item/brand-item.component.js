import React from 'react';
import LazyLoad from 'react-lazy-load';

import './brand-item.styles.css';

const BrandItem = ({brand: {imageUrl, title}}) => (
    <div className='brand-item-logo-container'>
        <LazyLoad height='70%'>
            <img src={imageUrl} alt={title} width='70%' height='100%'/>
        </LazyLoad> 
        <div className='rectangular'>
            <div className='triangle-brand'/>
        </div>
    </div>
);

export default BrandItem;