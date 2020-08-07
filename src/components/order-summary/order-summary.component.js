import React from 'react';
import LazyLoad from 'react-lazy-load';

import '../checkout-item/checkout-item.styles.css';
import './order-summary.styles.css';
import '../cart-item/cart-item.styles.css';

import { RupiahFormat } from '../../utils/utils';

const OrderSummary = ({item : {imageUrl, price, quantity, name}}) => (
    <div className='checkout-item-page-container'>
       <div className='checkout-item-page-desktop-view'>
            <div className='checkout-item-page-medium-block-container'>
                <div className='checkout-item-page-image-container' style={{position: 'relative'}}>
                    <LazyLoad height='100%'>
                        <img src={imageUrl} width='100%' height='100%' alt="logo-lalala"/>
                    </LazyLoad>   
                    <div className='order-summary-badge'>{quantity}</div>
                </div>
            </div>
            <div className='checkout-item-page-medium-block-container'>
                <span> {name}</span>
            </div>
            <div className='checkout-item-page-medium-block-container'>
                <span> {RupiahFormat(price)} x {quantity}</span>
            </div>
            <div className='checkout-item-page-medium-block-container'>
                <span>{RupiahFormat(price*quantity)}</span>
            </div>
        </div>
        <div className='checkout-item-page-mobile-view'>
            <div className='checkout-item-medium-mobile-container'>
                <div className='checkout-item-image-container' style={{position: 'relative'}}>
                    <img src={imageUrl} width='100%' height='100%' alt="logo-lalala"/>
                    <div className='order-summary-badge'>{quantity}</div>
                </div>
            </div>
            <div className='checkout-item-large-mobile-container'>
                <p className='item-name'>{name}</p>
                <p className='pricexqty'>{RupiahFormat(price)} x {quantity}</p>
                <p className='order-summary-total-price'>{RupiahFormat(price*quantity)}</p>
            </div>
        </div>
    </div>
);

export default OrderSummary;