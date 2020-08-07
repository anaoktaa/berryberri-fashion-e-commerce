import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../../components/all-category-preview/all-category-preview.styles.css';

import './category.styles.css';

import ItemPreview from '../../components/item-preview/item-preview.component';

import { selectCategory } from '../../redux/shop/shop.selectors';

const CategoryPage = ({categoryItems}) => {
    const totalItem = categoryItems? categoryItems.items.length : 0;
    return (
        <div className='category-page-container'>
            <div className='route-container'>
                <Link className='link-route-text' to='/'>Home</Link><span> / </span>
                <Link className='link-route-text' to='/shop'>Shop</Link><span> / </span>
                <span>{categoryItems.title} </span>
            </div>
            <p className='title-text-all-category-preview'>{categoryItems.title}</p>
            <p className='total-item-text'>Displaying 1 - {totalItem} of {totalItem} items </p>
            <div className='items-container'>
                {categoryItems.items.map((item) => (             
                    <ItemPreview key={item.id} payload={item} />
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    categoryItems: selectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);