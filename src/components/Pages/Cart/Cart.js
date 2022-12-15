import React from 'react';
import NavigateBanner from '../../Shared/Navbar/NavigateBanner';
import ShopInfo from '../Shop/ShopInfo';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

const Cart = () => {
  return (
    <div className="bg-slate-50 lg:px-16 px-4">
      <NavigateBanner title="Cart" navigateFrom="home" navigateTo="cart" />
      <div className="grid lg:grid-cols-3 gap-10 my-10">
        <div className="lg:col-span-2">
          <div className=" grid grid-cols-10 font-bold bg-yellow-100 my-auto mx-auto px-8 py-2">
            <div className="col-span-1"></div>
            <h3 className="col-span-2 text-start">Product</h3>
            <h3 className="col-span-2 text-start">Price</h3>
            <h3 className="col-span-2 text-start">Quantity</h3>
            <h3 className="col-span-2 text-start">SubTotal</h3>
            <div className="col-span-1"></div>
          </div>
          <CartItem />
        </div>
        <div className=" lg:col-span-1 bg-yellow-100  h-[55vh] py-5  rounded-lg">
          <CartTotals />
        </div>
      </div>
      <ShopInfo />
    </div>
  );
};

export default Cart;
