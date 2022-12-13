import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import product1 from '../../../assets/images/product1.png';
import product2 from '../../../assets/images/product2.png';
import product3 from '../../../assets/images/product3.png';
import product4 from '../../../assets/images/product4.png';
import Product from '../../Shared/Product/Product';
const ShopProduct = () => {
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
    <div className="mt-5">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4  ">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>

      <div className="flex justify-center   my-10">
        <div className="btn-group my-5 ">
          <button className="btn btn-sm bg-white text-black hover:bg-white hover:text-black border-gray-400 ">
            <KeyboardDoubleArrowLeftIcon />
          </button>
          <button className="btn btn-sm bg-white text-black hover:bg-white hover:text-black border-gray-400">
            Page 1
          </button>
          <button className="btn btn-sm bg-white text-black hover:bg-white hover:text-black border-gray-400">
            <KeyboardDoubleArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
