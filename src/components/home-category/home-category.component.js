import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './home-category.styles.css';

import CategoryItem from '../category-item/category-item.component';

import { selectCategories } from '../../redux/directory/directory.selectors';

const Category = ({sections}) => (
    <div className='category-container'>
        <p className='title-text'>Shop By Categories</p>
        <div className='home-category-container'>
            {sections.map(({title, id, imageUrl, size, linkUrl}) => (
                <CategoryItem key={id} title={title} size={size} imageUrl={imageUrl} url={linkUrl}/>
            ))}
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectCategories
})

export default connect(mapStateToProps)(Category);