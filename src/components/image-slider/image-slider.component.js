import React from 'react';
import LazyLoad from 'react-lazy-load';
import { withRouter } from 'react-router';

import withWindowResize from '../with-window-resize/with-window-resize.component';

import './image-slider.styles.css';

import CustomButton from '../custom-button/custom-button.component';


const ImageSlider = ({imageUrl, highImageUrl,  caption, textPosition, title, actualSize, history}) => {
    return (
        <div className='image-slider-container'>
            <LazyLoad height='100vh'>
                <img src={actualSize === 'others'? highImageUrl: imageUrl} alt="images-slide-1" width='100%' height='100%' />
            </LazyLoad>     
            <div className='overlay'>
                <div className='description-container'>
                    <div className={`${textPosition === 'left' ? `position-left`: textPosition === 'right'? `position-right` : `position-center` } caption`}>
                        <div className={`${textPosition === 'left' ? `text-align-left`: textPosition === 'right'? `text-align-right` : `text-align-center` } caption-container`}>{caption}</div>
                        <p className='title-text'>{title}</p>
                        <CustomButton onClick={() => history.push('/shop')} large>Shop Now</CustomButton>
                    </div>
        
                </div>
            </div>
        </div>
    )
};

export default withRouter(withWindowResize(ImageSlider));