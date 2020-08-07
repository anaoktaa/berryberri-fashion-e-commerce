import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import '../home-category/home-category.styles.css';

import ItemPreview from '../item-preview/item-preview.component';

import { selectBestSeller } from '../../redux/directory/directory.selectors';

const BestSeller = ({bestSellers}) => (
    <div className='category-container'>
        <p className='title-text'>Best Seller</p>
        <div className='home-category-section-container'>
            {bestSellers.map((bestSeller) => (
                <ItemPreview key={bestSeller.id} payload={bestSeller}/>
            ))}
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
  bestSellers: selectBestSeller 
})

export default connect(mapStateToProps)(BestSeller);