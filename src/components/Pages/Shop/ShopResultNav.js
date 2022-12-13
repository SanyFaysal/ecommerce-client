import React, { useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterProduct from './FilterProduct/FilterProduct';
const ShopResultNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-lg shadow  py-4 px-5 flex justify-between  sticky top-16 bg-white">
      <div>
        <h1 className="font-bold lg:text-lg hidden lg:block">All Products</h1>
      </div>
      <div className="flex">
        <div className="mr-3">
          {' '}
          <span className="mr-2">Show </span>
          <select className="select select-xs bg-gray-100 rounded-0 max-w-xs">
            <option>5</option>
            <option>10</option>
            <option>15</option>
          </select>
        </div>
        <div>
          <span className="mr-2">Short By </span>
          <select className="select bg-gray-100  select-xs mr-2">
            <option disabled selected>
              Default
            </option>
            <option>{`Price (Low < High )`}</option>
            <option>{`Price (High > Low )`}</option>
          </select>
        </div>
        {/* filter product for small device  */}
        <div className="lg:hidden block my-auto">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="" onClick={() => setIsOpen(!isOpen)}>
              <FilterListIcon />
            </label>
            <ul
              tabIndex={0}
              className={` ${
                isOpen ? 'dropdown-content bg-gray-100 menu p-2 w-60' : 'hidden'
              }`}
            >
              <FilterProduct />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopResultNav;
