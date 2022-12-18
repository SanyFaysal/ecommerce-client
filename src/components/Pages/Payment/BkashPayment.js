import { TextField } from '@mui/material';
import React, { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Notice from './Notice';
const BkashPayment = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  return (
    <div>
      <div className="">
        <h1 className="text-4xl font-bold text-center text-yellow-500">
          Bkash Payment
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 lg:px-28 px-4 gap-8 mt-8">
        <div className="border  w-full rounded lg:p-10 p-4 mx-auto ">
          <div className="">
            <h1 className="text-2xl font-semibold text-center">
              How To Payment{' '}
            </h1>
            <h1 className="font- text-xl mt-4 mb-4 ">
              <span className="font-semibold"> BKash Number : </span>
              <span className="text-yellow-600 rounded-lg bg-gray-200 font-bold px-3  ">
                01634319696
              </span>{' '}
              (Personal)
            </h1>
            <div>
              <div className="flex mb-1 bg-gray-100 p-2">
                <CheckCircleIcon sx={{ color: 'seagreen' }} />
                <p className="ml-2 font-semibold text-lg">
                  Go to your bKash Mobile Menu by dialing *247#
                </p>
              </div>
              <div className="flex mb-1 bg-gray-100 p-2">
                <CheckCircleIcon sx={{ color: 'seagreen' }} />
                <p className="ml-2 font-semibold text-lg">
                  Choose “Send Money”
                </p>
              </div>
              <div className="flex mb-1 bg-gray-100 p-2">
                <CheckCircleIcon sx={{ color: 'seagreen' }} />
                <p className="ml-2 font-semibold text-lg">
                  Enter{' '}
                  <span className="text-yellow-600 rounded-lg bg-gray-200 font-bold px-2 ">
                    01634319696
                  </span>{' '}
                  Number to send money
                </p>
              </div>
              <div className="flex mb-1 bg-gray-100 p-2">
                <CheckCircleIcon sx={{ color: 'seagreen' }} />
                <p className="ml-2 font-semibold text-lg">
                  Enter your total bill
                  <span className="text-yellow-600 mx-1 rounded-lg bg-gray-200 font-bold px-2 ">
                    BDT. 7800 BDT
                  </span>{' '}
                  amount to send.
                </p>
              </div>
              <div className="flex mb-1 bg-gray-100 p-2">
                <CheckCircleIcon sx={{ color: 'seagreen' }} />
                <p className="ml-2 font-semibold text-lg">
                  Enter
                  <span className="text-yellow-600 rounded-lg bg-gray-200 font-bold px-2 mx-1 ">
                    your name for reference
                  </span>{' '}
                  about the transaction
                </p>
              </div>
              <div className="flex mb-1 bg-gray-100 p-2">
                <CheckCircleIcon sx={{ color: 'seagreen' }} />
                <p className="ml-2 font-semibold text-lg">
                  Now enter your bKash Mobile Menu PIN to confirm the
                  transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="lg:col-span-1 col-span-12  flex justify-center items-center w-full ">
        <p className="lg:block hidden">
          {' '}
          <KeyboardDoubleArrowRightIcon
            sx={{ fontSize: '50px', color: 'orange' }}
          />
        </p>
        <p className="lg:hidden block">
          {' '}
          <KeyboardDoubleArrowDownIcon
            sx={{ fontSize: '50px', color: 'orange' }}
          />
        </p>
      </div> */}
        <div className=" p-4 w-full rounded mx-auto border bg-yellow-50">
          <form className="lg:mx-10 mt-10 mb-16">
            <h1 className="font- text-2xl lg:mt-4 mb-8 ">
              <span className="font-semibold ">Please Provide </span>
            </h1>
            <TextField
              id="outlined-basic"
              label="Your BKash Number"
              variant="filled"
              size="small"
              required
              className="w-full"
            />
            <div className="my-6"></div>
            <TextField
              id="outlined-basic"
              size="small"
              required
              className="w-full"
              label="Payment TrxID"
              variant="filled"
            />
            <div className="form-control mt-3">
              <label className=" flex mt-1">
                <input
                  type="checkbox"
                  className="checkbox checkbox-warning"
                  onClick={() => setAcceptTerms(!acceptTerms)}
                />
                <span className="label-text my-auto ml-2 text-lg">
                  Please check your BKash number and transaction id once again{' '}
                </span>
              </label>
            </div>
            <div className="flex justify-center">
              <button
                disabled={acceptTerms ? false : true}
                type="submit"
                className=" bg-yellow-500 btn mx-auto inline-block px-16 rounded-lg hover:bg-yellow-500  mt-6 border-none"
              >
                Submit
              </button>
            </div>
          </form>

          <Notice />
        </div>
      </div>
    </div>
  );
};

export default BkashPayment;
