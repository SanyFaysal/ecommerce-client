import React from 'react';
import FilterByAvailability from './FilterByAvailability';
import FilterByPrice from './FilterByPrice';

const FilterProduct = () => {
  return (
    <div className=" mx-auto sticky z-1 top-16 rounded-lg   flex-col">
      <FilterByPrice />
      <FilterByAvailability />
    </div>
  );
};

export default FilterProduct;
