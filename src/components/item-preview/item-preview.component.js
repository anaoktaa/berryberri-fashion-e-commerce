import React from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazy-load';
import './item-preview.styles.css';

import CustomButton from '../custom-button/custom-button.component';
import { RupiahFormat } from '../../utils/utils';
import { addItem } from '../../redux/cart/cart.actions';

const ItemPreview = ({ payload, addItem}) => {
    const {imageUrl, name, size, price} = payload
    return (
        <div className='item-preview-container' >
            <div className='section-container' size={size}>
                <LazyLoad height='100%'>
                    <img src={imageUrl} alt={name} width='100%' height='100%'/>
                </LazyLoad>  
              
                <div className='bright-overlay '>
                    <div className='add-button-container'>
                        <CustomButton style={{width: '100%'}} inverse onClick={() => addItem(payload)} >
                            Add to Cart
                        </CustomButton>
                    </div>
                </div>
            </div>
            <div className='item-preview-detail-item-container'>
                <p className='item-name-text'>
                    {name}
                </p>
                <div className='price-container'>
                    <div className='vertical-line'/>
                    <p className='price-text'>{RupiahFormat(price)}</p>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(ItemPreview);