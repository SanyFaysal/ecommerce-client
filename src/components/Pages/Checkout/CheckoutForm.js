import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';

const CheckoutForm = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-semibold mt-3 mb-5">Billing Details</h1>
      <div className="grid grid-cols-2">
        <div className="lg:mr-2">
          <TextField
            id="standard-basic"
            label="First Name"
            variant="filled"
            className="w-full"
            size="small"
          />
        </div>
        <div className="lg:ml-2">
          <TextField
            id="standard-basic"
            label="Last Name"
            variant="filled"
            className=" w-full"
            size="small"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-5">
        <div className="lg:mr-2">
          <FormControl variant="filled" className=" w-full">
            <InputLabel id="demo-simple-select-filled-label">
              Division
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              size="small"
            >
              <MenuItem value="Dhaka">Dhaka</MenuItem>
              <MenuItem value="Chittagong">Chittagong</MenuItem>
              <MenuItem value="Rajshahi">Rajshahi</MenuItem>
              <MenuItem value="Khulna">Khulna</MenuItem>
              <MenuItem value="Jessore">Jessore</MenuItem>
              <MenuItem value="Mymensing">Mymensing</MenuItem>
              <MenuItem value="Barishal">Barishal</MenuItem>
              <MenuItem value="Sylhet">Sylhet</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="lg:ml-2">
          <TextField
            id="standard-basic"
            label="Town/City"
            variant="filled"
            className=" w-full"
            size="small"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 mt-5">
        <div className="lg:mr-2 col-span-1">
          <TextField
            id="standard-basic"
            label="ZIP code"
            variant="filled"
            className="w-full "
            size="small"
          />
        </div>
        <div className="lg:ml-2 col-span-2">
          <TextField
            id="standard-basic"
            label="Street Address"
            variant="filled"
            className="w-full"
            size="small"
          />
        </div>
      </div>
      <div className="mt-5">
        <TextField
          id="standard-basic"
          label="Phone Number"
          variant="filled"
          className=" w-full"
          size="small"
        />
      </div>
      <div className="mt-5">
        <TextField
          id="standard-basic"
          label="Email Address"
          variant="filled"
          className=" w-full"
          size="small"
        />
      </div>
      <div className="mt-5">
        <TextField
          id="standard-basic"
          label="Additional Info (Optional)"
          variant="filled"
          multiline
          rows={3}
          className=" w-full"
          size="small"
        />
      </div>
    </div>
  );
};

export default CheckoutForm;
