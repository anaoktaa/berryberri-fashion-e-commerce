import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './cart-icon.styles.css';

import style from './cart-icon.styles';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({toogleCartHidden, darkContent, itemCount}) => (
    <div className='bag-container'>
        <div className='cart-wrap' onClick={toogleCartHidden}>
            <i class="fas fa-shopping-bag" style={darkContent? style.option : style.option_grey}></i>
        </div>
        <div className='bag-badge'>{itemCount}</div>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    itemCount : selectCartItemsCount
})

const mapDispatchToProps = (dispatch) => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);