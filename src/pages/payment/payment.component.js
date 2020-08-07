import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


import '../../components/all-category-preview/all-category-preview.styles.css';

import '../shop/shop.styles.css';
import '../category/category.styles.css';
import '../checkout/checkout.styles.css';
import  './payment.styles.css';

import Spinner from '../../components/spinner/spinner.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

const SplitForm = lazy(() => import('../../components/payment-form/payment-form.component'));
const OrderSummary = lazy(() => import('../../components/order-summary/order-summary.component'));

const stripePromise =  loadStripe("pk_test_mRRJ7GHZIUwNj4fhSj5vya5X00eIQVk1HM"); 

const PayFormContainer = () => (
    <div className='payment-page-form-container'>
        <p className='payment-page-title-text'>Enter Payment Detail</p>
        <div className='payment-note'>
            <p>This is a dummy project. Please do not enter you real payment information.</p>
            <p>*Please use the following test credit card for payment*</p>
            <p>4242 4242 4242 4242 EXP : 01/23 CVV : 123</p>
        </div>
        <Suspense fallback={<Spinner/>}>
            <SplitForm/>
        </Suspense>
    </div>
);

const CheckoutBodyContent = ({cartItems}) => (
    <div className='payment-page-checkout-body'>
        <Suspense fallback={<Spinner/>}>
            {
                cartItems.map((cartItem) => (
                    <OrderSummary key={cartItem.id} item={cartItem}/>
                ))
            }
        </Suspense>
    </div>
)

const PaymentPage = ({ cartItems }) => (
    <div className='default-container'>
         <div className='route-container'>
            <Link className='link-route-text' to='/'>Home</Link><span> / </span>
            <Link className='link-route-text' to='/checkout'>Checkout</Link><span> / </span>
            <span>Payment</span>
        </div>
        <p className='title-text-all-category-preview'>Payment</p>
        <div className='payment-page-main-container'> 
            <div className='payment-page-order-summary-container'>
                <p className='payment-page-title-text'>Order Summary</p>
                    <div className='payment-page-desktop-view'>
                        <div className='payment-page-checkout-header'>
                            <div className='header-block-container'>
                                <span>Product</span>
                            </div>
                            <div className='header-block-container'>
                                <span>Description</span>
                            </div>
                            <div className='header-block-container'>
                                <span>Unit Price</span>
                            </div>
                            <div className='header-block-container'>
                                <span>Total Price</span>
                            </div>
                        </div>
                    </div>
                    <div className='payment-page-mobile-view'>
                        <div className='payment-page-checkout-header'>
                            <div className='checkout-header-block-container-mobile'>
                                <span>Product</span>
                            </div>
                            <div className='checkout-header-block-container-mobile'>
                                <span>Description</span>
                            </div>
                        </div>
                    </div>
                <CheckoutBodyContent cartItems={cartItems}/>
            </div>
            <Elements stripe={stripePromise}>
                <PayFormContainer/>
            </Elements>
         
        </div>
    </div>
    
);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});

export default connect(mapStateToProps)(PaymentPage);