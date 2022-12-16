import React from 'react';
import { Link } from 'react-router-dom';

const CartTotals = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center uppercase px-10">
        Cart Totals
      </h1>
      <div className="flex justify-between px-12 mt-8">
        <h1 className=" font-semibold">Subtotals</h1>
        <h1 className="font-bold">BDT. 12,5000 TK</h1>
      </div>
      <div className="flex justify-between px-12 mt-3">
        <h1 className="font-semibold">Shipping Cost</h1>
        <h1 className=" font-bold">BDT. 120 Tk</h1>
      </div>
      <div className="flex justify-between px-12 mt-12">
        <h1 className="text-lg font-semibold">Totals</h1>
        <h1 className="text-lg font-bold text-yellow-500">BDT. 12,5150 TK</h1>
      </div>
      <div className="flex justify-center items-center mt-8">
        <button className="btn btn-outline rounded-full px-16 hover:bg-transparent hover:text-yellow-500 hover:border-yellow-500 duration-500">
          <Link to="/checkout"> Checkout</Link>
        </button>
      </div>
    </>
  );
};

export default CartTotals;
