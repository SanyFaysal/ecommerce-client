import React, { useState } from 'react';
import NavigateBanner from '../../Shared/Navbar/NavigateBanner';
import bkash from '../../../assets/images/bkashIcon.png';
import bank from '../../../assets/images/bank.png';
import BkashPayment from './BkashPayment';
import BankPayment from './BankPayment';
const Payment = () => {
  const [payment, setPayment] = useState('bkash');
  return (
    <div>
      <div className="lg:flex mx-auto items-center mx-auto ml-8 lg:ml-0  justify-center my-12">
        <div className="flex lg:mr-12 items-center mb-4 lg:mb-0">
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
        {payment === 'bank' && <BankPayment />}
      </div>
    </div>
  );
};

export default Payment;
