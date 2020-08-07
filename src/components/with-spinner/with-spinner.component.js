import React from 'react';

import Spinner from '../spinner/spinner.component';

const WithSpinner = WrappedComponent =>  ({isLoading, ...otherProps}) => {
    if (isLoading) {
        return (
            <Spinner/>
        )
    }
    return (<WrappedComponent {...otherProps}/>)
};

export default WithSpinner;