import React from 'react';

const ShopInfo = () => {
  return (
    <div className="bg-[#FAF4F4] grid lg:grid-cols-3 grid-cols-1 py-12 lg:px-16 px-4 gap-5 my-auto ">
      <div className="border-r px-2">
        <h1 className="text-3xl font-bold text-center">Free Delivery</h1>
        <p className="text-lg  text-center">
          For all orders over 1000 Tk we offer free delivery in the whole
          country
        </p>
      </div>
      <div className="border-r px-2">
        <h1 className="text-3xl font-bold text-center">90 Days Return</h1>
        <p className="text-lg text-center">
          If any good has any problem then you can return it to us within 90
          days from the delivery date.
        </p>
      </div>
      <div className="px-2">
        <h1 className="text-3xl font-bold text-center">100% Secure Payment</h1>
        <p className="text-lg text-center">
          We ensure your payment fully secure. So you can take your trust on us
        </p>
      </div>
    </div>
  );
};

export default ShopInfo;
