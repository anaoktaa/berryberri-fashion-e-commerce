import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import './payment-detail.styles.css';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { selectSubtotalCartItems } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { RupiahFormat } from '../../utils/utils';
import { setNotifShow } from '../../redux/notif/notif.actions';

const PaymentDetail = ({total, currentUser, history, totalCartItems, setNotifShow }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handlePay = () => {
        if (currentUser) {
            if (totalCartItems > 0) {
                history.push('/checkout/payment')
            }
            else {
                setNotifShow({
                    type: 'danger',
                    title: 'Error',
                    message:  'Please select item first.',
                    show: true
                })
            }
        }
        else {
            history.push('/signup')
        }
       
    }
    return (
        <div className='payment-detail-container'>
            <div className='payment-detail-voucher-container '>
                <p className='payment-detail-voucher-text'>
                    <strong>Enter the voucher code or gift card. <br/></strong>
                    You will receive a code via email if you get or buy a BerryBerri gift card.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className='flex-space-between'>
                        <div className='payment-detail-input-container'>
                            <FormInput
                                placeholder="Enter your voucher code"
                            />
                        </div>
                        <div className='payment-detail-button-voucher-container'>
                            <CustomButton style={{width: '100%'}} type="submit" secondary>Generate</CustomButton>
                        </div>  
                    </div>
                </form>

            </div>
            <div className='total-detail-container'>
                <div className='flex-space-between'>
                    <p className='payment-detail-total-detail-text'>Subtotal</p>
                    <p className='payment-detail-total-detail-text'>{RupiahFormat(total)}</p>
                </div>
                <div className='flex-space-between'>
                    <p className='payment-detail-total-detail-text'>Tax</p>
                    <p className='payment-detail-total-detail-text'>{RupiahFormat(0)}</p>
                </div>
                <div className='payment-detail-line'/>
                <div className='flex-space-between'>
                    <p className='total-payment-text '>TOTAL PAYMENT</p>
                    <p className='total-payment-nominal'>{RupiahFormat(total)}</p>
                </div>
                <div className='payment-detail-button-payment-container'>
                    <CustomButton onClick={handlePay} style={{width: '100%'}}>Pay Now</CustomButton>
                </div>
            </div>
        </div>
    );
}
  

const mapStateToProps = createStructuredSelector({
    total: selectSubtotalCartItems,
    currentUser: selectCurrentUser,
    totalCartItems: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    setNotifShow: data => dispatch(setNotifShow(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PaymentDetail));