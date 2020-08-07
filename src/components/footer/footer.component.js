import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

import './footer.styles.css';
import '../home-category/home-category.styles.css';
import { style } from './footer.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


const Footer = () => (
    <div className='footer-container'>
        <div class='category-container'>
            <div className='footer-part'>
                <div className='footer-large-container'>
                    <div className='footer-logo-container '>
                        <LazyLoad height='100%'>
                            <img src="https://i.ibb.co/KXKHF6v/berryberri-1.png" alt='logo' width='100%' height='100%'/>
                        </LazyLoad> 
                    </div>
                    <p className='default-footer-text'>
                        As Asia’s Online Fashion Destination, we create endless style possibilities through an ever-expanding range of products form the most coveted international and local brands, putting you at the centre of it all. 
                        <strong> With BerryBerri, You Own Now.</strong>
                    </p>
                    <br/>
                    <p className='footer-main-title-text'><strong>Find Us On</strong></p>
                    <div className='social-media-container'>
                        <a href="https://facebook.com" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                            <i class="fab fa-facebook-f" style={style.socmedIconStyle}/>
                        </a>
                        <a href="https://twitter.com" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                            <i class="fab fa-twitter" style={style.socmedIconStyle}/>
                        </a>
                        <a href="https://instagram.com" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                            <i class="fab fa-instagram"  style={style.socmedIconStyle}/>
                        </a>
                        <a href="https://youtube.com" target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                            <i class="fab fa-youtube" style={style.socmedIconStyle}/>
                        </a>
                        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                            <i class="fab fa-linkedin" style={style.socmedIconStyle}/>
                        </a>
                    </div>
                </div>
                <div className='footer-medium-container'>
                    <p className='footer-main-title-text'><strong>Customer Services</strong></p>
                    <Link className='footer-link-text' to='#'>FAQ</Link>
                    <Link className='footer-link-text' to='#'>Returns</Link>
                    <Link className='footer-link-text' to='#'>Product Index</Link>
                    <Link className='footer-link-text' to='#'>Fashion Glossary</Link>
                    <Link className='footer-link-text' to='#'>Order Tracking</Link>
                </div>
                <div className='footer-medium-container'>
                    <p className='footer-main-title-text'><strong>About BerryBerri</strong></p>
                    <Link className='footer-link-text' to='#'>Promotions</Link>
                    <Link className='footer-link-text' to='#'>Terms & Conditions</Link>
                    <Link className='footer-link-text' to='#'>Privacy Policy</Link>
                    <Link className='footer-link-text' to='#'>Influencer Program</Link>
                    <Link className='footer-link-text' to='#'>THREAD by BerryBerri</Link>
                </div>
                <div className='footer-large-container'>
                    <p className='footer-main-title-text'><strong>New to BerryBerri?</strong></p>
                    <div className='default-footer-text '> Get a <span className='hightlight'><strong>Rp 75.000 </strong></span> Voucher (plus the latest fashion news and product launches) just by subscribing to our newsletter.</div>
                    <form >
                        <FormInput 
                            labelColor={"#dedede"}
                            name="Email"
                            type="email"
                            label="Your email address"
                        />
                        <div className='footer-additional-information'>
                            <div className='footer-button-container '>
                                <CustomButton outlined type="button">
                                    Female
                                </CustomButton>
                            </div>
                            <div className='footer-button-container '>
                                <CustomButton outlined type="button">
                                    Male
                                </CustomButton>
                            </div>
                        </div>
                    </form>
                    <br/>
                    <div className='footer-additional-information'>
                        <Link className='footer-link-text' to='#'>Privacy |  </Link>
                        <Link className='footer-link-text' to='#'>&nbsp; Term of Services</Link>
                    </div>
                    <br/>
                    <div className='default-footer-text'>© 2020 BerryBerri</div>
                </div>
            </div>
            <div className='mobile-footer-menu'>
                <p className='footer-main-title-text'><strong>Shop Online On BerryBerri</strong></p>
                <div className='default-footer-text'>
                    As Asia’s Online Fashion Destination, we create endless style possibilities through an ever-expanding range of products form the most coveted international and local brands, putting you at the centre of it all. 
                    <strong> With BerryBerri, You Own Now.</strong>
                </div>
                <br/>
                <p className='footer-main-title-text'><strong>Find Us On</strong></p>
                <div className='footer-social-media-container'>
                    <a href="https://facebook.com" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                        <i class="fab fa-facebook-f" style={style.socmedIconStyle}/>
                    </a>
                    <a href="https://twitter.com" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                        <i class="fab fa-twitter" style={style.socmedIconStyle}/>
                    </a>
                    <a href="https://instagram.com" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                        <i class="fab fa-instagram"  style={style.socmedIconStyle}/>
                    </a>
                    <a href="https://youtube.com" target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                        <i class="fab fa-youtube" style={style.socmedIconStyle}/>
                    </a>
                    <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                        <i class="fab fa-linkedin" style={style.socmedIconStyle}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;