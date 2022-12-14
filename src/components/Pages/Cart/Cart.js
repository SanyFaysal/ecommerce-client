import React from 'react';
import NavigateBanner from '../../Shared/Navbar/NavigateBanner';

const Cart = () => {
  return (
    <div className="bg-slate-50 ">
      <NavigateBanner title="Cart" navigateFrom="home" navigateTo="cart" />
    </div>
  );
};

export default Cart;
