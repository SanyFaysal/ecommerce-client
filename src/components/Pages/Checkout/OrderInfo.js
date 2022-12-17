import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const OrderInfo = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mt-3 mb-5">Your Order</h1>
      <div>
        <div className="grid grid-cols-2 justify-between mb-1">
          <h1 className="font-semibold text-xl text-start">Product </h1>
          <h1 className="font-semibold text-xl text-end">Subtotal</h1>
        </div>
        <hr />
        <div className="grid grid-cols-2 mb-2 mt-4">
          <p className="font-semibold text-start ">
            Ashgaard Sofa Into <CloseIcon /> <span className="mx-2">2</span>
          </p>
          <p className="font-semibold text-end">BDT 2300 Tk</p>
        </div>
        <div className="grid grid-cols-2">
          <p className="font-semibold text-start">
            Ashgaard Sofa Into <CloseIcon /> <span className="mx-2">2</span>
          </p>
          <p className="font-semibold text-end">BDT 2300 Tk</p>
        </div>
      </div>
      <div className="flex justify-between mt-12 text-lg font-semibold">
        <h1 className="">Sub Totals</h1>
        <h1 className=""> BDT 3500 Tk </h1>
      </div>
      <div className="flex justify-between mt-2 text-lg font-semibold">
        <h1 className="">Shipping cost</h1>
        <h1 className=""> BDT 150 Tk </h1>
      </div>
      <div className="flex justify-between mt-6 text-xl font-semibold">
        <h1 className="">Totals</h1>
        <h1 className=""> BDT 3500 Tk </h1>
      </div>

      <div className="mt-12 flex justify-center">
        <button className="btn btn-outline px-12 text-lg hover:bg-transparent hover:text-yellow-500 hover:border-yellow-500  duration-500 rounded-full">
          <Link to="/payment">
            Payment{' '}
            <KeyboardDoubleArrowRightIcon
              sx={{ fontSize: '25px', marginBottom: '3px' }}
            />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default OrderInfo;
