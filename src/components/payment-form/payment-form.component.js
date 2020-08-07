import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import FormInput from '../form-input/form-input.component';
import { default as CustomButton } from '../custom-button/custom-button.container';
import { PaymentFormContainer } from './payment-form.styles';

import { selectSubtotalCartItems } from '../../redux/cart/cart.selectors';
import { setNotifShow } from '../../redux/notif/notif.actions';
import { startIsLoading, stopIsLoading } from '../../redux/system/system.actions';
import { RupiahFormat } from '../../utils/utils';

const useOptions = () => {
  const options = {
      style: {
        base: {
          fontSize: '15px',
          fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
          fontWeight: 500,  
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
  };

  return options;
};

const CardForm = ({total, setNotifShow, stopIsLoading, startIsLoading}) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    startIsLoading();
    const token = await stripe.createToken(elements.getElement(CardElement));
  
    if (token.error) {
      setNotifShow({
        type: 'danger',
        title: 'Error',
        message:  token.error.message,
        show: true
      })
    }
    else {
      fetch({
        url: 'payment',
        method: 'post',
        data: {
          amount: total*100,
          ...token
        }
      }).then(response=> {
        setNotifShow({
          type: 'success',
          title: 'Success',
          message: 'Payment successful',
          show: true
        })
        stopIsLoading();
      }).catch(error => {
          setNotifShow({
            type: 'danger',
            title: 'Error',
            message: 'There was an issue with your payment! Please make sure you use the provided credit card.',
            show: true
          });
          stopIsLoading();
          console.log("Payment Error", (error));
      })
    }
  };

  return (
    <PaymentFormContainer>
        <form onSubmit={handleSubmit}>
            <label>
                Card Details
                <CardElement
                    options={options}
                    onChange={event => {
                        console.log("CardElement [change]", event);
                    }}
                />
            </label>
            <CustomButton style={{width: '100%', marginTop: '20px'}} type="submit">
                Pay {RupiahFormat(total)}
            </CustomButton>
        </form>
    </PaymentFormContainer>
   
  );
};

const mapStateToProps = createStructuredSelector({
  total: selectSubtotalCartItems
});

const mapDispatchToProps = dispatch => ({
  setNotifShow: (data) => dispatch(setNotifShow(data)),
  startIsLoading: () => dispatch(startIsLoading()),
  stopIsLoading: () => dispatch(stopIsLoading())
})

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
