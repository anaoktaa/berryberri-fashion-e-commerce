import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './category-overview.styles.css';

import AllCategoryPreview from '../all-category-preview/all-category-preview.component';

import { selectCategoryForPreview } from '../../redux/shop/shop.selectors';

const CategoryOverview = ({categories}) => (
    <div className='category-overview-container'>
        {categories.map((collection) => (
            <AllCategoryPreview key={collection.id} title={collection.title} items={collection.items}/>
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    categories : selectCategoryForPreview
})

export default connect(mapStateToProps)(CategoryOverview);