import React from 'react';

const CartTotals = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center uppercase px-10">
        Cart Totals
      </h1>
      <div className="flex justify-between px-12 mt-8">
        <h1 className="text-lg font-semibold">Subtotals</h1>
        <h1 className="text-lg font-bold">BDT. 12,5000 TK</h1>
      </div>
      <div className="flex justify-between px-12 mt-8">
        <h1 className="text-lg font-semibold">Bonus</h1>
        <h1 className="text-lg font-bold">0%</h1>
      </div>
      <div className="flex justify-between px-12 mt-8">
        <h1 className="text-lg font-semibold">Totals</h1>
        <h1 className="text-lg font-bold text-yellow-500">BDT. 12,5000 TK</h1>
      </div>
    </>
  );
};

export default CartTotals;
