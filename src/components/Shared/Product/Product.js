import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { red } from '@mui/material/colors';

import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Link } from 'react-router-dom';
const Product = ({ product }) => {
  const { productImg, productName } = product;
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="flex-col justify-center items-center shadow p-5 bg-white rounded">
      <img src={productImg} className="w-[200px] h-[250px] mx-auto" alt="" />
      <div className="">
        <div className="">
          <h4 className=" font-semibold">{productName}</h4>
        </div>
        <p className="text-lg font-semibold">
          Price: <span>25000</span> TK
        </p>
        <div className="flex justify-around mt-3">
          {/* <button className="btn btn-outline btn-sm mr-2">Watch</button> */}
          {/* <button className="btn btn-outline btn-sm hover:bg-orange-700 hover:border-0 duration-500">
            Add To Cart
          </button> */}
          <Link
            to="/productDetails/1"
            className="lg:btn lg:btn-sm lg:bg-transparent lg:text-black lg:border-gray-200 lg:hover:bg-white lg:hover:text-black"
          >
            <ReadMoreIcon /> <span className="ml-1">Details</span>
          </Link>
          <button className="lg:btn lg:btn-sm lg:bg-transparent lg:text-black lg:border-gray-200 lg:hover:bg-white lg:hover:text-black">
            <AddShoppingCartIcon /> <span className="ml-1">Add to Cart</span>
          </button>
          <div onClick={() => setFavorite(!favorite)} className="ml-1">
            {favorite ? (
              <FavoriteIcon sx={{ color: red[500] }} />
            ) : (
              <FavoriteBorderIcon className="hover:text-red-500" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
