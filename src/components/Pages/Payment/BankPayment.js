import { TextField } from '@mui/material';
import React, { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Notice from './Notice';
const BankPayment = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  return (
    <div>
      <div className="">
        <h1 className="text-4xl font-bold text-center text-yellow-500">
          Bank Payment
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 lg:px-16 px-4 gap-8 mt-8">
        <div className="  w-full rounded lg:p-10 p-4 mx-auto border">
          <div className="">
            <h1 className="text-2xl font-semibold mb-3 ">Bank Details</h1>

            <div>
              <h1 className="text-xl font-semibold pb-2">Account info</h1>
              <p className="text-lg bg-gray-100 p-2 mb-1">
                {' '}
                Account Name: Abu Sani Faysal
              </p>
              <p className="text-lg text-lg bg-gray-100 p-2">
                {' '}
                Account Number:
                <span className="text-yellow-600 rounded-lg bg-gray-200 font-bold px-3  ">
                  0207101014640
                </span>{' '}
              </p>
              <h1 className="text-xl font-semibold py-2">Bank info</h1>
              <p className="text-lg  bg-gray-100 p-2 bg-gray-100 mb-1">
                Bank Name: SONALI BANK LIMITED
              </p>
              <p className="text-lg  p-2 bg-gray-100 mb-1">Bank Code: 200</p>
              <p className="text-lg p-2 bg-gray-100 mb-1">District: Gazipur</p>
              <p className="text-lg p-2 bg-gray-100 mb-1">
                ROUTING NUMBER: 200330738
              </p>
              <p className="text-lg  bg-gray-100 px-3 py-2 mb-1">
                BRANCH : 2071 - JOYDEVPUR GAZIPUR|
              </p>
              <p className="text-lg  bg-gray-100 px-3 py-2 mb-1">
                SWIFT CODE: BSONBDDH
              </p>
              <p className="text-lg  bg-gray-100 px-3 py-2 mb-1">
                {' '}
                Address : JOYDEVPUR, GAZIPUR
              </p>
              <p className="text-lg  bg-gray-100 px-3 py-2 mb-1">
                SWIFT CODE: BSONBDDH
              </p>
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
            <h1 className="font- text-2xl mt-4 mb-8 ">
              <span className="font-semibold ">Please Provide </span>
            </h1>

            <TextField
              id="outlined-basic"
              size="small"
              required
              className="w-full"
              label="Payment TrxID"
              variant="filled"
            />
            <div className="my-6"></div>
            <TextField
              id="outlined-basic"
              label="Add Short Note (Optional)"
              variant="filled"
              size="small"
              multiline
              rows={3}
              className="w-full"
            />
            <div className="form-control mt-3">
              <label className=" flex mt-1">
                <input
                  type="checkbox"
                  className="checkbox checkbox-warning"
                  onClick={() => setAcceptTerms(!acceptTerms)}
                />
                <span className="label-text my-auto ml-2 text-lg">
                  Please check TrxID id once again{' '}
                </span>
              </label>
            </div>
            <div className="flex justify-center mt-5">
              <button
                disabled={acceptTerms ? false : true}
                type="submit"
                className=" bg-yellow-500 btn mx-auto inline-block px-16 rounded-lg hover:bg-yellow-500   border-none"
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

export default BankPayment;
