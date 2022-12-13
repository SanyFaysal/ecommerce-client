import { Checkbox, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';

const FilterByPrice = () => {
  const [range, setRange] = useState([]);
  return (
    <div className="bg-white rounded shadow ">
      <div className="pl-5 py-3">
        <h1 className="font-bold text-xl">Price Range </h1>
      </div>
      <hr />
      <div className="pl-5 py-3">
        <FormControlLabel
          control={
            <Checkbox
              onChange={() => setRange([100, 1000])}
              checked={range[0] === 100 && true}
              name="gilad"
            />
          }
          label="100 TK - 1000 TK"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={() => setRange([1000, 5000])}
              checked={range[0] === 1000 && true}
              name="gilad"
            />
          }
          label="1000 TK - 5000 TK"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={() => setRange([5000, 10000])}
              checked={range[0] === 5000 && true}
              name="gilad"
            />
          }
          label="5000 TK - 10,000 TK"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="gilad"
              onChange={() => setRange([10000, 20000])}
              checked={range[0] === 10000 && true}
            />
          }
          label="10,000 TK - 20,000 TK"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="gilad"
              onChange={() => setRange([20000, 50000])}
              checked={range[0] === 20000 && true}
            />
          }
          label="20,000 TK - 50,000 TK"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="gilad"
              onChange={() => setRange([50000])}
              checked={range[0] === 50000 && true}
            />
          }
          label="50,000 TK  - More"
        />
      </div>
    </div>
  );
};

export default FilterByPrice;
