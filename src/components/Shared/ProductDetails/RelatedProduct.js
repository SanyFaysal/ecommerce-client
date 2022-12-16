import React from 'react';
import { Link } from 'react-router-dom';
import product3 from '../../../assets/images/product3.png';
import product4 from '../../../assets/images/product4.png';
import Product from '../../Shared/Product/Product';
const RelatedProduct = () => {
  const products = [
    {
      productImg: product3,
      productName: 'Dining Table D477 (6 Chairs + 1 Table)',
    },
    {
      productImg: product4,
      productName: 'Dining Table DT213 (6 Chairs + 1 Table)',
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
    <div className="my-10">
      <div>
        <h1 className="text-3xl text-center font-bold my-10">
          Related Products
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4  ">
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
        <div className="flex justify-center my-10">
          <Link to="/shop" className="btn btn-sm btn-link text-2xl text-black ">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
