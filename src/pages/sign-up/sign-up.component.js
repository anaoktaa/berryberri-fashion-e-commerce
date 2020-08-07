import React, { useState } from 'react';
import { connect } from 'react-redux';
import  { Link } from 'react-router-dom';

import '../sign-in/sign-in.styles.css';

import { default as CustomButton } from '../../components/custom-button/custom-button.container';

import SideImage from '../../components/side-image/side-image.component';
import FormInput from '../../components/form-input/form-input.component';


import { signUpStart } from '../../redux/user/user.actions';

const SignUpPage = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({displayName: '', email: '', password: '', confirmPassword:  ''});

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password don't match")
            return;
        }
        signUpStart({displayName, email, password})   
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({...userCredentials, [name]: value});
    }

    return (
        <div className='sign-card-container'>
             <div className='sign-form-container'>
                <div className='form-container'>
                    <h1 className='sign-title-text'>SIGN IN</h1>
                    <form onSubmit={handleSubmit} >
                        <FormInput 
                            onChange={handleChange}
                            value={displayName}
                            name="displayName"
                            type="text"
                            label="Display Name"
                            required
                        />
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
                        <FormInput 
                            onChange={handleChange}
                            value={confirmPassword}
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            required
                        />
                        <CustomButton className='sign-button' type="submit" onClick={handleSubmit}>Sign Up</CustomButton>
                    </form>
                    <p className='sign-detail-text'>Already have a BerryBerri account <Link className='link-sign-up' to='/signin'> Sign In</Link></p>
                </div>
            </div>
            <div className='sign-image-container'>
                <SideImage
                    imageUrl="https://i.ibb.co/z76wvd2/odunsi.jpg"
                    mainText={"BerryBerri"}
                    detailText={"Welcome to berryberri"}
                />
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userData) => dispatch(signUpStart(userData))
});

export default connect(null, mapDispatchToProps)(SignUpPage);