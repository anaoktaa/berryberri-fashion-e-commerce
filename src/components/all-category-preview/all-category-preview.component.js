import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import './all-category-preview.styles.css';

import ItemPreview from '../item-preview/item-preview.component';

const AllCategoryPreview = ({title, items, match}) => {
    return (
        <div className='all-category-preview-category-items-container'>
            <p className='title-text-all-category-preview'>{title}</p>
            <Link className='all-collection-link' to={`${match.path}/${title.toLowerCase()}`}>View All Collections</Link>
            <div className='category-item-container'>
                {items.filter((item, idx) => idx < 4).map((item) => (
                    <ItemPreview key={item.id} payload={item} />
                ))}
            </div>
        </div>
    );
    
}
export default withRouter(AllCategoryPreview);