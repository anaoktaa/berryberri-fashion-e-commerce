import React from 'react';
import { Link } from 'react-router-dom';

import './side-image.styles.css';

const SideImage = ({imageUrl, mainText, detailText}) => (
    <div className='side-image-container'>
        <img src={imageUrl} alt="sideimage" width='100%' height='100%'/>
        <div className='absolute-container-image '>
            <div className='side-image-logo-container'>
                <Link to='/'><img src="https://i.ibb.co/KXKHF6v/berryberri-1.png" alt="logo"/></Link>
            </div>            
            <p className='welcome-text'>{detailText}</p>
            <p className='berryberri-text'>{mainText}</p>
        </div>
    </div>
);

export default SideImage;