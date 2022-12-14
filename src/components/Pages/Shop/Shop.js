import React from 'react';

import FilterProduct from './FilterProduct/FilterProduct';

import ShopResultNav from './ShopResultNav';
import ShopProduct from './ShopProduct';
import ShopInfo from './ShopInfo';
import NavigateBanner from '../../Shared/Navbar/NavigateBanner';
const Shop = () => {
  return (
    <div className="bg-slate-50 ">
      <NavigateBanner />
      <div className="px-4 my-5 grid grid-cols-10 gap-4">
        <div className="lg:block hidden lg:col-span-2">
          <FilterProduct />
        </div>
        <div className="lg:col-span-8 col-span-10">
          <ShopResultNav />
          <ShopProduct />
        </div>
      </div>
      <div>
        <ShopInfo />
      </div>
    </div>
  );
};

export default Shop;
