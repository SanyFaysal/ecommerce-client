import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const ProductExtraInfo = () => {
  return (
    <div className="mt-8">
      <div>
        <ul className="flex justify-center text-xl">
          <li>
            <CustomLink to="description">Description</CustomLink>
          </li>
          <li className="mx-5">
            <CustomLink to="additionalInfo">Additional Info</CustomLink>
          </li>
          <li>
            <CustomLink to="review">Review (5)</CustomLink>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProductExtraInfo;
