import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { pink, red } from '@mui/material/colors';
import PreviewIcon from '@mui/icons-material/Preview';
const Product = ({ product }) => {
  const { productImg, productName } = product;
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="flex-col justify-center items-center shadow p-5 rounded">
      <img src={productImg} className="w-[200px] h-[250px] mx-auto" alt="" />
      <div className="">
        <div className="">
          <h4 className=" font-semibold">{productName}</h4>
        </div>
        <p className="text-lg font-semibold">
          Price: <span>250</span> $
        </p>
        <div className="flex justify-between mt-3">
          {/* <button className="btn btn-outline btn-sm mr-2">Watch</button> */}

          {/* <button className="btn btn-outline btn-sm hover:bg-orange-700 hover:border-0 duration-500">
            Add To Cart
          </button> */}
          <PreviewIcon />
          <AddShoppingCartIcon />
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
