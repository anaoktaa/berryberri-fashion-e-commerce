import React, { useState } from 'react';
import { connect } from 'react-redux';
import  { Link } from 'react-router-dom';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.css';

import { default as CustomButton } from '../../components/custom-button/custom-button.container';

import SideImage from '../../components/side-image/side-image.component';
import FormInput from '../../components/form-input/form-input.component';


const SignInPage = ({ googleSignInStart, emailSignInStart }) => {
    const [ userCrendentials, setUserCredentials ] = useState({email : '', password: ''});

    const { email, password } = userCrendentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password)

    }

    const handleChange = event => {
        const { name, value } = event.target; 
        setUserCredentials({...userCrendentials, [name] : value});
    }

    return (
        <div className='sign-card-container'>
            <div className='sign-form-container'>
                <div className='form-container'>
                    <h1 className='sign-title-text'>SIGN IN</h1>
                    <form onSubmit={handleSubmit}>
                        <FormInput
                            onChange={handleChange} 
                            value={email}
                            name="email"
                            type="email"
                            label="Email"
                            required
                        />
                        <FormInput 
                            onChange={handleChange}
                            value={password}
                            name="password"
                            type="password"
                            label="Password"
                            required
                        />
                        <CustomButton className='sign-button' type="submit" onClick={handleSubmit}>Sign In</CustomButton>
                        <p className='another-sign-text'><span>or sign in with</span></p>
                        <CustomButton className='sign-button' mediaSocial type="button" onClick={googleSignInStart}>
                            <div className='logo-social-media-container'>
                                <img src="https://i.ibb.co/KzJGRJk/google.png" alt="google" width='100%' height='100%'/>
                            </div>
                            <span>
                            Sign In with Google
                            </span>
                        </CustomButton>
                    </form>
                    <p className='sign-detail-text'>Do not have a BerryBerri account? <Link className='link-sign-up' to='/signup'> Sign Up</Link></p>
                </div>
            </div>
            <div className='sign-image-container'>
                <SideImage
                    imageUrl="https://i.ibb.co/fNwFz3m/dom-hill.jpg"
                    mainText={"BerryBerri"}
                    detailText={"Create your own style"}
                />
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignInPage);