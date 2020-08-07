import React from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazy-load';

import style from './checkout-item.styles';

import '../cart-item/cart-item.styles.css';
import './checkout-item.styles.css';

import IncrementButton from '../increment-button/increment-button.component';

import { RupiahFormat } from '../../utils/utils';
import { addItem, clearItemFromCart, removeItemFromCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({item, addItem, clearItemFromCart, removeItemFromCart}) =>  {
    const {imageUrl, name, quantity, price} = item
    return (
        <div className='checkout-item-page-container'>
            <div className='checkout-item-page-desktop-view'>
                <div className='checkout-item-page-medium-block-container'>
                    <div className='checkout-item-page-image-container'>
                        <LazyLoad height='100%'>
                            <img src={imageUrl} width='100%' height='100%' alt="logo-lalala"/>
                        </LazyLoad>    
                    </div>
                </div>
                <div className='checkout-item-page-medium-block-container'>
                    <span>{name}</span>
                </div>
        
                <div className='checkout-item-page-medium-block-container'>
                    <IncrementButton
                        item={item}
                        quantity={quantity}
                        handleIncrement = {() => addItem(item)}
                        handleDecrement = {() => removeItemFromCart(item)}
                    />
                </div>
                <div className='checkout-item-page-medium-block-container'>
                    <span>{RupiahFormat(price)}</span>
                </div>
                <div className='checkout-item-page-small-block-container'>
                    <span onClick={() => clearItemFromCart(item)}>
                        <i class="fas fa-trash" style={style.trashIcon}/>
                    </span>
                </div>
            </div>
            <div className='checkout-item-page-mobile-view'>
                <div className='checkout-item-medium-mobile-container'>
                    <div className='checkout-item-image-container'>
                        <img src={imageUrl} width='100%' height='100%' alt="logo-lalala"/>
                    </div>
                </div>
                <div className='checkout-item-large-mobile-container'>
                    <p className='item-name'>{name}</p>
                    <p className='item-price'>{RupiahFormat(price)}</p>
                    <IncrementButton
                        item={item}
                        quantity={quantity}
                        handleIncrement = {() => addItem(item)}
                        handleDecrement = {() => removeItemFromCart(item)}
                    />
                </div>
            </div>
         
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);