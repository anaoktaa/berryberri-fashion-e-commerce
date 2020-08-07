import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import '../../components/all-category-preview/all-category-preview.styles.css';
import '../category/category.styles.css';
import './checkout.styles.css';
import '../shop/shop.styles.css';

import Spinner from '../../components/spinner/spinner.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

const PaymentDetailComponent = lazy(() => import('../../components/payment-detail/payment-detail.component'));
const CheckoutItem = lazy(() => import('../../components/checkout-item/checkout-item.component'));


const CheckoutPage = ({cartItems}) => (
    <div className='default-container'>
        <div className='route-container'>
            <Link className='link-route-text' to='/'>Home</Link><span> / </span>
            <span>Checkout</span>
        </div>
        <p className='title-text-all-category-preview'>Checkout</p>
        <div className='checkout-page-container'>
            <div className='checkout-list-container'>
                <div className='desktop-view'>
                    <div className='checkout-page-header'>
                        <div className='checkout-header-block-container'>
                            <span>Product</span>
                        </div>
                        <div className='checkout-header-block-container'>
                            <span>Description</span>
                        </div>
                        <div className='checkout-header-block-container'>
                            <span>Quantity</span>
                        </div>
                        <div className='checkout-header-block-container'>
                            <span>Price</span>
                        </div>
                        <div className='checkout-header-block-container'>
                            <span>Remove</span>
                        </div>
                    </div>
                </div>
                <div className='mobile-view'>
                    <div className='checkout-page-header'>
                        <div className='checkout-header-block-container-mobile'>
                            <span>Product</span>
                        </div>
                        <div className='checkout-header-block-container-mobile'>
                            <span>Description</span>
                        </div>
                    </div>
                </div>
                <Suspense fallback={<Spinner/>}>
                    <div className='checkout-page-body '>
                        {
                            cartItems.map((cartItem) => (
                                <CheckoutItem 
                                    item={cartItem}
                                    key={cartItem.id}
                                />
                            ))
                        }
                    </div>
                </Suspense>
             
            </div>
            <Suspense fallback={<div/>}>
                <PaymentDetailComponent/>
            </Suspense>
        </div>
    </div>
);

const mapStateToProps =  createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CheckoutPage);