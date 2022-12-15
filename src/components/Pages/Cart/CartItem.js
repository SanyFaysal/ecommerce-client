import React from 'react';
import product from '../../../assets/images/product1.png';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
const CartItem = () => {
  return (
    <div className=" grid grid-cols-10 font-semibold  my-auto px-8 py-2 border-b">
      <img
        src={product}
        className="col-span-1 w-[50px] h-[50px] border my-auto rounded-full shadow-lg"
        alt=""
      />
      <h3 className="col-span-2 my-auto text-start">Ashgard Sofa </h3>
      <h3 className="col-span-2 my-auto text-start">BDT. 7800 TK</h3>
      <h3 className="col-span-2 my-auto text-start">3</h3>
      <h3 className="col-span-2 my-auto text-start"> BDT 23400 TK</h3>
      <h3 className="col-span-1 my-auto text-center col-span-1">
        <IconButton aria-label="" onClick={() => console.log('click')}>
          <DeleteIcon className="text-red-500" />
        </IconButton>
      </h3>
    </div>
  );
};

export default CartItem;
