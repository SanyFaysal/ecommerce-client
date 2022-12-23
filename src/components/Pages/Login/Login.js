import { TextField } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../assets/images/login.gif';
import Notice from '../Payment/Notice';
const Login = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:px-16 py-8 px-4 m-8  ">
      <div className=" w-full rounded mx-auto my-auto ">
        <form className=" bg-gray-50 p-8">
          <h1 className="font- text-2xl lg:mt-4 mb-8 ">
            <span className="font-semibold ">Please Sign In From Here </span>
          </h1>
          <TextField
            id="outlined-basic"
            label="Your Email"
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
            label="Password"
            variant="filled"
          />
          {/* <div className="form-control mt-3">
            <label className=" flex mt-1">
              <input
                type="checkbox"
                className="checkbox checkbox-warning"
                onClick={() => setAcceptTerms(!acceptTerms)}
              />
              <span className="label-text my-auto ml-2 text-sm">
                Please check your BKash number and transaction id once again{' '}
              </span>
            </label>
          </div> */}
          <div className="w-full">
            <button
              type="submit"
              className=" bg-yellow-500 btn mx-auto block px-16 rounded-lg hover:bg-yellow-500  mt-6 border-none"
            >
              Sign iN
            </button>
          </div>
        </form>
      </div>
      <img src={login} alt="" className="my-auto max-w-sm mx-auto" />
    </div>
  );
};

export default Login;
