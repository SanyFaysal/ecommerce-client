import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const ProductDetailsNav = () => {
  return (
    <div className="flex items-center my-5">
      <div className="text-sm breadcrumbs ">
        <ul className="">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </div>
      <KeyboardDoubleArrowRightIcon
        className="inline text-gray-400 ml-2"
        sx={{ fontSize: '20px' }}
        size="small"
      />
      <h1 className="text-lg font-bold ml-3">Asgaard Sofa</h1>
    </div>
  );
};

export default ProductDetailsNav;
