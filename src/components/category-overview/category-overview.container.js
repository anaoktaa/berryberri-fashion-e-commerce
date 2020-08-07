import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';


import WithSpinner from '../with-spinner/with-spinner.component';
import CategoryOverview from './category-overview.component';

import { selectIsFetching } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching
});

const CategoryOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CategoryOverview);

export default CategoryOverviewContainer;