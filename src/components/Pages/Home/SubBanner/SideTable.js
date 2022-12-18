import React from 'react';
import { Link } from 'react-router-dom';
import sideTable from '../../../../assets/images/side-table.png';

const SideTable = () => {
  return (
    <div className="flex-col justify-center items-center ">
      <div>
        <img src={sideTable} alt="" className="lg:w-[500px] lg:h-[400px] " />
      </div>
      <div className=" mt-[-100px]">
        <h1 className="text-3xl  ml-28">Side Table</h1>
        <span className="lg:ml-28 mt-2 inline-block">
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

export default SideTable;
