import React from 'react';

import '../shop/shop.styles.css';
import '../../components/all-category-preview/all-category-preview.styles.css';
import './contact.styles.css';

const Contact = () => {
    const style = {
        icon: {
            fontSize: 36, lineHeight: '80px',
        }
    }
    return (
        <div className='default-container'>
             <p className='title-text-all-category-preview'>Contact Us</p>
             <div className='contact-container'>
                <div className='contact-main'>
                    <div className='icon-circle'>
                        <i style={style.icon} class="fas fa-clipboard-list"></i>
                    </div>
                    <h3>Payment Confirmation</h3>
                </div>
                <div className='contact-main'>
                    <div className='icon-circle'>
                        <i style={style.icon} class="far fa-times-circle"></i>
                    </div>
                    <h3>Cancel / Change Orders</h3>
                </div>
                <div className='contact-main'>
                    <div className='icon-circle'>
                        <i style={style.icon} class="fas fa-undo-alt"></i>
                    </div>
                    <h3>Return Product</h3>
                </div>
                <div className='contact-main'>
                    <div className='icon-circle'>
                        <i style={style.icon} class="fas fa-search"></i>
                    </div>
                    <h3>Check Order Status</h3>
                </div>
                <div className='contact-main'>
                    <div className='icon-circle'>
                        <i style={style.icon}  class="far fa-clock"></i>
                    </div>
                    <h3>Estimated Time of Receipt of Orders</h3>
                </div>
                <div className='contact-main'>
                    <div className='icon-circle'>
                        <i style={style.icon}  class="fas fa-question"></i>
                    </div>
                    <h3>Other Questions</h3>
                </div>
             </div>
        </div>  
    )
};

export default Contact;