import { TextField } from '@mui/material';
import React from 'react';

const BkashPayment = () => {
  return (
    <div className="w-[85vh] rounded h-96 mx-auto border bg-yellow-50">
      <div className="m-10">
        <h1 className="font- text-xl mt-4 mb-8 ">
          <span className="font-semibold"> BKash Number : </span>
          <span className="text-yellow-600 underline mx-2">
            01634319696
          </span>{' '}
          (Personal)
        </h1>
        <TextField
          id="outlined-basic"
          label="Your BKash Number"
          variant="filled"
          size="small"
          className="w-full"
        />
        <div className="my-6"></div>
        <TextField
          id="outlined-basic"
          size="small"
          className="w-full"
          label="Payment TrxID"
          variant="filled"
        />
        <div className="form-control mt-3">
          <label className=" flex items-center">
            <input type="checkbox" className="checkbox checkbox-warning" />
            <span className="label-text my-auto ml-2">
              I accept all terms and condition{' '}
            </span>
          </label>
        </div>
        <div className="flex justify-center">
          <button className=" bg-yellow-500 btn mx-auto inline-block px-16 rounded-lg hover:bg-yellow-500 my-12 border-none">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BkashPayment;
