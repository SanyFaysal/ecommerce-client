import React, { useState } from 'react';
import NavigateBanner from '../../Shared/Navbar/NavigateBanner';
import bkash from '../../../assets/images/bkashIcon.png';
import bank from '../../../assets/images/bank.png';
import BkashPayment from './BkashPayment';
const Payment = () => {
  const [payment, setPayment] = useState('bkash');
  return (
    <div>
      <div className="flex justify-center my-12">
        <div className="flex mr-12 items-center">
          <input
            type="radio"
            name="radio-6"
            className="radio radio-warning"
            onClick={() => setPayment('bkash')}
            checked={payment === 'bkash' ? true : false}
          />
          <img src={bkash} className=" h-[25px] mx-2 " alt="" /> Bkash Payment
        </div>
        <div className="flex items-center ">
          <input
            type="radio"
            name="radio-6"
            className="radio radio-warning"
            onClick={() => setPayment('bank')}
            checked={payment === 'bank' ? true : false}
          />{' '}
          <img src={bank} className=" h-[30px] mx-2" alt="" /> Bank Payment
        </div>
      </div>
      <div className="mx-auto mb-16">
        {payment === 'bkash' && <BkashPayment />}
        {payment === 'bank' && <div>This is bank</div>}
      </div>
    </div>
  );
};

export default Payment;
