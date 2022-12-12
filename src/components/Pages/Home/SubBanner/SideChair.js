import React from 'react';
import { Link } from 'react-router-dom';
import sideChair from '../../../../assets/images/side-chair.png';

const SideChair = () => {
  return (
    <div className="flex-col justify-center items-center lg:mr-28">
      <div>
        <img src={sideChair} alt="" className="w-[500px] h-[400px]  inline" />
      </div>
      <div className=" mt-[-100px]">
        <h1 className="text-3xl  ml-48">Side Chair</h1>
        <span className="ml-48 mt-2 inline-block">
          <Link
            to="/shop"
            className="border-b border-b-2 border-black font-bold hover:text-blue-500 hover:border-blue-500 duration-500"
          >
            View More
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SideChair;
