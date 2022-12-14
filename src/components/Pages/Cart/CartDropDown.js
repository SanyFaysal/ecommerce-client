import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import product from '../../../assets/images/product1.png';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
const CartDropDown = () => {
  return (
    <div
      tabIndex={0}
      className="dropdown-content menu shadow  py-3 rounded-box lg:w-96 w-72"
      style={{ backdropFilter: 'blur(30px)' }}
    >
      <div className="pl-4 py-3 ">
        <h1 className="text-2xl font-semibold  ">Shopping Cart</h1>
      </div>
      <hr />
      <div className="py-4 lg:px-5 px-3">
        <div className="flex  justify-between items-center   my-2">
          <div className="flex justify-start items-center">
            <img
              src={product}
              className="w-[70px] h-[70px] border rounded-lg mr-4"
              alt=""
            />
            <div>
              <h1 className=" font-bold text-lg">Asgaard Sofa</h1>
              <p className=" font-semibold">
                1 <CloseIcon /> BDT. 7800 TK
              </p>
            </div>
          </div>
          <button>
            <IconButton aria-label="">
              <DeleteIcon className="text-red-500" />
            </IconButton>
          </button>
        </div>
        <div className="flex justify-between items-center   my-2">
          <div className="flex justify-start items-center">
            <img
              src={product}
              className="w-[70px] h-[70px] border rounded-lg mr-4"
              alt=""
            />
            <div>
              <h1 className=" font-bold text-lg">Asgaard Sofa</h1>
              <p className=" font-semibold">
                1 <CloseIcon /> BDT. 7800 TK
              </p>
            </div>
          </div>
          <button>
            <IconButton aria-label="">
              <DeleteIcon className="text-red-500" />
            </IconButton>
          </button>
        </div>
        <div className="flex justify-between items-center  my-2">
          <div className="flex justify-start items-center">
            <img
              src={product}
              className="w-[70px] h-[70px] border rounded-lg mr-4"
              alt=""
            />
            <div>
              <h1 className=" font-bold text-lg">Asgaard Sofa</h1>
              <p className=" font-semibold">
                1 <CloseIcon /> BDT. 7800 TK
              </p>
            </div>
          </div>
          <button>
            <IconButton aria-label="">
              <DeleteIcon className="text-red-500" />
            </IconButton>
          </button>
        </div>
      </div>
      <div className="p-5 flex justify-between  items-center">
        <p className="text-lg font-semibold ">Subtotal</p>
        <p className="text-lg font-semibold text-warning">BDT. 23400 TK </p>
      </div>
      <hr />
      <div className="px-5 py-2 flex justify-between ">
        <Link
          to="/cart"
          className="btn btn-sm rounded-lg mr-2 lg:px-10 hover:bg-transparent hover:text-black btn-outline "
        >
          View Cart
        </Link>
        <Link
          to="/checkout"
          className="btn btn-sm rounded-lg ml-2 lg:px-10 hover:bg-transparent hover:text-black btn-outline "
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartDropDown;
