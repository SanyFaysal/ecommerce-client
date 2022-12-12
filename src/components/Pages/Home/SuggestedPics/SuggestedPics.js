import React from 'react';
import Product from '../../../Shared/Product/Product';
import product1 from '../../../../assets/images/product1.png';
import product2 from '../../../../assets/images/product2.png';
import product3 from '../../../../assets/images/product3.png';
import product4 from '../../../../assets/images/product4.png';
import { Link } from 'react-router-dom';

const SuggestedPics = () => {
  const products = [
    {
      productImg: product1,
      productName: 'Bhindeshi Modern Dining Table DT685 (4 Chairs + 1 Table)',
    },
    {
      productImg: product2,
      productName: 'Designer Dining Table DT152 ( 6 Chairs + 1 Table)',
    },
    {
      productImg: product3,
      productName: 'Dining Table D477 (6 Chairs + 1 Table)',
    },
    {
      productImg: product4,
      productName: 'Dining Table DT213 (6 Chairs + 1 Table)',
    },
  ];
  return (
    <div className="my-16 lg:px-16 ">
      <h1 className="text-center text-4xl font-bold mt-10 ">
        Top Pics For You
      </h1>
      <div className="w-[70px] py-1 bg-gray-500 rounded-lg mx-auto"></div>
      <p className="text-center  text-xl mt-1">
        Find a bright ideal to suit your with our great selection of suspension,
        floor and table lights{' '}
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-16">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
      <div className=" mx-auto my-10">
        <h3 className="text-center">
          <Link
            to="/shop"
            className="border-b border-b-2 text-2xl border-black"
          >
            View More
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default SuggestedPics;
