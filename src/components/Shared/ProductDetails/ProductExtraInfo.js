import React from 'react';
import { Link } from 'react-router-dom';

const ProductExtraInfo = () => {
  return (
    <div className="mt-8">
      <div>
        <ul className="flex justify-center text-xl">
          <li>
            <Link>Description</Link>
          </li>
          <li className="mx-5">
            <Link>Additional Info</Link>
          </li>
          <li>
            <Link>Review (5)</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductExtraInfo;
