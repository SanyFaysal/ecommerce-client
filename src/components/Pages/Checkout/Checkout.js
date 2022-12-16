import React from 'react';
import NavigateBanner from '../../Shared/Navbar/NavigateBanner';
import CheckoutForm from './CheckoutForm';
import OrderInfo from './OrderInfo';

const Checkout = () => {
  return (
    <div>
      <NavigateBanner
        title="Checkout"
        navigateFrom="home"
        navigateTo="checkout"
      />
      <div className="lg:px-28 px-4  grid  lg:grid-cols-5 gap-20 my-10">
        <div className="lg:col-span-3">
          <CheckoutForm />
        </div>
        <div className="lg:col-span-2">
          <OrderInfo />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
