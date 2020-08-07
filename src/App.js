import React, { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { withRouter, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Spinner from './components/spinner/spinner.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import { selectCategoryForPreview } from './redux/shop/shop.selectors';
import { selectNotifProps } from './redux/notif/notif.selectors';
import { setNotifClose } from './redux/notif/notif.actions';
import { selectCartItemsCount } from './redux/cart/cart.selectors';


const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const Footer = lazy(() => import('./components/footer/footer.component'));
const SignInPage = lazy(() => import('./pages/sign-in/sign-in.component'));
const SignUpPage = lazy(() => import('./pages/sign-up/sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const PaymentPage = lazy(() => import('./pages/payment/payment.component'));
const ErrorBoundary = lazy(() => import('./components/error-boundary/error-boundary.component'));
const Notification = lazy(() => import('./components/notification/notification.component'));



const App = ({ location, currentUser, checkUserSession, notifProps, setNotifClose, totalCartItems }) => {
  
  const [isOffside, setOffside] = useState(null);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  useEffect(() => {
    const handleScroll = () => {
      const lastScroll = window.scrollY;
      const isScrollPositonOffside = lastScroll > 40;

      if (isOffside !== isScrollPositonOffside) {
        setOffside(isScrollPositonOffside);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);

  }, [isOffside]);

  return (
    <div className="App">
      {
          location.pathname !== '/signin' &&  location.pathname !== '/signup' ?
          <Header offset={isOffside}/>
          :
          null
        }
        <Switch>
        <Route exact path='/' component={HomePage} />
          <Suspense fallback={<Spinner/>}>
            <ErrorBoundary>
              <Route path='/shop' component={ShopPage}/>    
              <Route exact path='/checkout' component={CheckoutPage}/>
              <Route exact path='/signin' 
                render={() => currentUser ? (<Redirect to='/'/>) : (<SignInPage/>)}
              />
              <Route exact path='/signup' 
                render={() => currentUser ? (<Redirect to='/'/>) : (<SignUpPage/>)}
              />
              <Route exact path='/checkout/payment'
                render={() => currentUser && totalCartItems > 0 ? (<PaymentPage/>) : (<Redirect to='/checkout'/>)}
              />        
              {
                notifProps.show?
                  <Notification
                    payload={notifProps}
                    handleCloseNotif={setNotifClose}
                  /> 
                  : 
                  null
              }
            </ErrorBoundary>
          </Suspense>
        </Switch>
        {
          location.pathname !== '/signin' && location.pathname !== '/signup' ?
          <Suspense fallback={<span/>}>
             <Footer/>
          </Suspense>
         
          :
          null
        }
    </div>
  );
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  collectionsArray: selectCategoryForPreview,
  notifProps: selectNotifProps,
  totalCartItems: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  setNotifClose: () => dispatch(setNotifClose())
})

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(App));
