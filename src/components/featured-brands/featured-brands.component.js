import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import '../home-category/home-category.styles.css';
import './feature-brands.styles.css';

import BrandItem from '../brand-item/brand-item.component';

import { selectBrands } from '../../redux/directory/directory.selectors';

const FeaturedBrands = ({brands}) => (
    <div className='category-container'>
        <div className='feature-brand-container'>
            <p className='title-text'>Featured Brands</p>
            <div className='logo-container'>
                {brands.map((brand) => (
                    <BrandItem brand={brand} key={brand.id}/>
                ))}
            </div>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    brands: selectBrands
});

export default connect(mapStateToProps)(FeaturedBrands);