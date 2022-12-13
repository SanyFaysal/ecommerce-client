import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';

const FilterByAvailability = () => {
  return (
    <div className=" mx-auto sticky top-90 rounded-lg shadow  flex-col bg-white lg:mt-5 mt-2">
      <div className="px-5 py-3">
        <h1 className="font-bold text-xl">Availability </h1>
      </div>
      <hr />
      <div className="px-5 py-3 flex-col">
        <div>
          <FormControlLabel
            control={<Checkbox name="gilad" />}
            label="In Stock"
          />
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox name="gilad" />}
            label="Pre Order"
          />
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox name="gilad" />}
            label="Up Coming"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterByAvailability;
