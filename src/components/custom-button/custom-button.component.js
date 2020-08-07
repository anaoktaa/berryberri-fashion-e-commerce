import React from 'react';

import { CustomButtonContent } from './custom-button.styles';

const CustomButton = ({children, styled, ...props}) => (
    <CustomButtonContent {...props}>
        {children}
    </CustomButtonContent>
);

export default CustomButton;