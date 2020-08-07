import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazy-load';

import './cart-item.styles.css';

import { RupiahFormat } from '../../utils/utils';
import { addItem, removeItemFromCart } from '../../redux/cart/cart.actions';

const IncrementButton = lazy(() => import('../increment-button/increment-button.component'));

const CartItem = ({item, addItem, removeItemFromCart}) => {
    const {imageUrl, name, price, quantity} = item
    return (
        <div className='cart-item-container'>
            <div className='cart-item-image-container'>
                <LazyLoad height='100%'>
                    <img src={imageUrl} alt="cart-item" width="100%" height="100%"/>
                </LazyLoad> 
            </div>
            <div className='detail-item-container'>
                <p className='item-name'>{name}</p>
                <p className='item-price'>{RupiahFormat(price)}</p>
                <div className='increment-button-container '>
                    <Suspense fallback={<span/>}>
                        <IncrementButton
                            item={item}
                            quantity={quantity}
                            handleIncrement={() => addItem(item)}
                            handleDecrement={() => removeItemFromCart(item)}
                        />
                    </Suspense>
                 
                </div>
            </div>
        </div>   
    );
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
    removeItemFromCart: (item) => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(React.memo(CartItem));