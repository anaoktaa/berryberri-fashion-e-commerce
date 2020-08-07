import React, { lazy, Suspense } from 'react';

import Spinner from '../../components/spinner/spinner.component';
import MainBillboard from '../../components/main-billboard/main-billboard.component';

const HomeCategory = lazy(() => import('../../components/home-category/home-category.component'));
const FeaturedBrands = lazy(() => import('../../components/featured-brands/featured-brands.component'));
const BestSeller = lazy(() => import('../../components/best-seller/best-seller.component'));


const HomePage = () => {
  return (
    <div className='homepage-container'>
      <MainBillboard/>
      <Suspense fallback={<Spinner/>}>
        <HomeCategory/>
        <BestSeller/>
        <FeaturedBrands/>
       </Suspense>
   
    </div>
  );
}

export default HomePage;