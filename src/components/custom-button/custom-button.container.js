import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';


import CustomButtonWithSpinner from '../custom-button-with-spinner/custom-button-with-spinner.component';
import CustomButton from './custom-button.component';

import { selectSystemIsLoading } from '../../redux/system/system.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: selectSystemIsLoading
});

const CustomButtonContainer = compose(
    connect(mapStateToProps),
    CustomButtonWithSpinner
)(CustomButton);

export default CustomButtonContainer;