import React from 'react';
import ProductDetailsNav from './ProductDetailsNav';
import ProductExtraInfo from './ProductExtraInfo';
import ProductImg from './ProductImg';
import ProductInfo from './ProductInfo';

const ProductDetails = () => {
  return (
    <div className="lg:px-16 px-5">
      <ProductDetailsNav />
      <div className="lg:grid grid-cols-12 gap-8 mt-5 ">
        <div className="col-span-6 h-full ">
          <ProductImg />
        </div>
        <div className="col-span-6 ">
          <ProductInfo />
        </div>
      </div>
      <div className="my-8">
        <hr />
        <ProductExtraInfo />
      </div>
    </div>
  );
};

export default ProductDetails;
