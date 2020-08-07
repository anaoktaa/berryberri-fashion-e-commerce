import React from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {

    constructor() {
        super();
        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        const { hasErrored } = this.state;
        const { children } = this.props;
        if (hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer>
                        <img src="https://i.ibb.co/NTchpkh/page-not-found-4.png" alt="error-img" width="100%" height="100%"/>
                    </ErrorImageContainer>
                    <ErrorImageText>Sorry this page is broken.</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        return children;
    }
}

export default ErrorBoundary;