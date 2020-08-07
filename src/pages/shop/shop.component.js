import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component';

import './shop.styles.css';

import { fetchCategoriesStart } from '../../redux/shop/shop.actions';

const CategoryOverviewContainer = lazy(() => import('../../components/category-overview/category-overview.container'));
const CategoryPageContainer = lazy(() => import('../category/category.container'));

const ShopPage = ({ match, fetchCategoriesStart } ) => {

    useEffect(() => {
        fetchCategoriesStart();
    }, [fetchCategoriesStart]);

    return (
        <div className='default-container'>
            <Suspense fallback={<Spinner/>}>
                <Route exact path={`${match.path}`} component={CategoryOverviewContainer} />
                <Route path={`${match.path}/:categoryId`} component={CategoryPageContainer}/>
            </Suspense>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchCategoriesStart: () => dispatch(fetchCategoriesStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);