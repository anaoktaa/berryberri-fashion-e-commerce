import React, { useState, lazy, Suspense } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import LazyLoad from 'react-lazy-load';

import './header.styles.css';
import style from './header.styles';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden, selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';


const CustomButton = lazy(() => import('../custom-button/custom-button.component'));
const CartIcon = lazy(() => import('../cart-icon/cart-icon.component'));


const Header = ({ offset, location, currentUser, signOutStart, hidden, history, itemCount}) => {
    const darkContent = !offset && location.pathname !== '/';
    const [menuToggle, setMenuToggle] = useState(false);

    const handleMenu = () => {
        setMenuToggle(!menuToggle);
    }

    const handleSignOut = () => {
        setMenuToggle(false);
        signOutStart();
    }

    const berryberri1 = "https://i.ibb.co/KXKHF6v/berryberri-1.png";
    const berryberri2 = "https://i.ibb.co/PGg1Ysr/berryberri-2.png"
    return (
        <div className={`${offset? `white-background-style` : `transparent-background-style`} header-container`}>
            <div className='header-left-menu'>
                <div className='logo-wrap'>
                    <Link to='/' className='logo-container'>
                        <LazyLoad height='100%'>
                            <img src={darkContent? berryberri2 : berryberri1} alt='berryberri-logo' width='100%' height='100%'/>
                        </LazyLoad> 
                    </Link>
                </div>
                <Link to='/shop' className={`${darkContent? `dark-option`: `option`}`}>Shop Now</Link>
                <Link to='#' className={`${darkContent? `dark-option`: `option`}`}>Our Store</Link>
                <Link to='#' className={`${darkContent? `dark-option`: `option`}`}>About Us</Link>
            </div>
     
            <div className='header-right-menu'>
                <Suspense fallback={<span/>}>
                    <CartIcon
                        darkContent={darkContent}
                    />
                </Suspense>
                {
                    currentUser?
                    <Link className={`${darkContent? `dark-option`: `option`}`} to='#' onClick={signOutStart}>
                        Sign Out <i class="fas fa-sign-out-alt" ></i>
                    </Link> 
                    :
                    <div className='button-shop-now'>
                        <Suspense fallback={<span/>}>
                            <CustomButton outlined={!darkContent} onClick={() => history.push('/signin')}>Sign In</CustomButton>
                        </Suspense>
                    </div>  
                }               
            </div>
            <div className='bar-menu'>
                <i class="fas fa-bars" onClick={handleMenu} style={darkContent? style.darkBarMenu :style.barMenu}></i>
            </div>
            {
                menuToggle?
                <div className='menu-hover'>
                    <Link to='/shop' onClick={handleMenu} className='option-menu'>Shop Now</Link>
                    <Link to='#' onClick={handleMenu} className='option-menu'>Our Store</Link>
                    <Link to='#' onClick={handleMenu} className='option-menu'>About Us</Link>
                    <div className='line'/>
                    <Link to='/checkout' onClick={handleMenu} className='option-menu column'>
                        My Cart
                        <div className='menu-hover-bag-badge'>{itemCount}</div>
                    </Link>
                    {currentUser?
                        <Link to="#" className='option-menu' onClick={handleSignOut}>Sign Out</Link>:
                        <Link to="/signin" className='option-menu' onClick={handleMenu}>Sign In</Link>
                    }
                </div>
                : null
            }
   
            {
                hidden?
                null:
                <CartDropdown/>
            }           
        </div>
    )
};

const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden,
    itemCount : selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));