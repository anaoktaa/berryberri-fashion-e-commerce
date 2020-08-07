import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './custom-button-with-spinner.styles';

const CustomButtonWithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading?
        (
            <WrappedComponent disabled {...otherProps}>
                <SpinnerOverlay>
                    <SpinnerContainer/>
                    {otherProps.children}
                </SpinnerOverlay>
            </WrappedComponent>
        )
        :
        (<WrappedComponent {...otherProps}/>)
};

export default CustomButtonWithSpinner;