import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import './cart-dropdown.styles.css';

import CartItem from '../cart-item/cart-item.component';
import style from './cart-dropdown.styles';


import { selectCartItems, selectSubtotalCartItems } from '../../redux/cart/cart.selectors';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { RupiahFormat } from '../../utils/utils';

const CustomButton = lazy(() => import('../custom-button/custom-button.component'));
// const CartIcon = lazy(() => import('../cart-icon/cart-icon.component'));
// const CartDropdown = lazy(() => import('../cart-dropdown/cart-dropdown.component'));

const CartDropdown = ({cartItems, dispatch, subtotal, history}) => {
    return (
        <div className='cart-dropdown-container'>
            <div className='triangle'/>
            <div className='clear'>
                <p>
                    Your Shopping Cart
                    <i class="fas fa-times" style={style.closeIcon} onClick={() => dispatch(toogleCartHidden())}/>
                </p>
            </div>
            <br/>
            <div className='cart-dropdown-fill'>
                {
                    cartItems.length?
                        cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                        ))     
                    : <p className='empty-text'>Your cart is empty</p>
                }   
            </div>  
            <div className='cart-button-container'>
                <div className='subtotal-container'>
                    <p className='subtotal-text'>Subtotal: </p>
                    <p className='subtotal-nominal-text'>{RupiahFormat(subtotal)}</p>
                </div>
                <Suspense fallback={<span/>}>
                    <CustomButton onClick={() => {
                        history.push('/checkout')
                        dispatch(toogleCartHidden())
                    }} style={{width :'100%'}}> Go to Checkout</CustomButton>
                </Suspense>
            </div>
        </div>
        // <CartContainer>
        //     <Triangel/>
        //     <Clear>
        //         <p>
        //             Your Shopping Cart
        //             <i class="fas fa-times" style={style.closeIcon} onClick={() => dispatch(toogleCartHidden())}/>
        //         </p>
        //     </Clear>
        //     <br/>
        //     <CartDropdownContainer>
        //         {
        //             cartItems.length?
        //                 cartItems.map((cartItem) => (
        //                 <CartItem key={cartItem.id} item={cartItem}/>
        //                 ))     
        //             : <EmptyText>Your cart is empty</EmptyText>}      
        //     </CartDropdownContainer>
        //     <CartButtonContainer>
        //         <SubtotalContainer>
        //             <SubtotalText>Subtotal : </SubtotalText>
        //             <SubtotalNominalText>{RupiahFormat(subtotal)}</SubtotalNominalText>
        //         </SubtotalContainer>
                // <CustomButton onClick={() => {
                //     history.push('/checkout')
                //     dispatch(toogleCartHidden())
                // }} style={{width :'100%'}}> Go to Checkout</CustomButton>
        //     </CartButtonContainer>
          
        // </CartContainer>
    );
}
const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    subtotal: selectSubtotalCartItems
});

// const mapDispatchToProps = (dispatch) => ({
//     toogleCartHidden: () => dispatch(toogleCartHidden())
// })

export default withRouter(connect(mapStateToProps)(CartDropdown));