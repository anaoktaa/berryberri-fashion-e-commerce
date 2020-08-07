import React from 'react';
import { withRouter } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

import './category-item.styles.css';


const CategoryItem = ({title, imageUrl, size, history, url}) => {
    return (
        <div onClick={() => history.push(url)} className={`${size? `large-section-container-width` : `default-section-container-width`} zoom category-item-section-container`}>
            <LazyLoad height='100%'>
                <img src={imageUrl} alt={title} width='100%' height='100%'/>
            </LazyLoad>    
        
            <div className='category-item-section-overlay'>
                <p className={`${size === 'large' ? `category-item-large-text`: `category-item-default-text`}`}>{title}</p>
            </div>
        </div>
    );
    
}
export default withRouter(CategoryItem);