import React from 'react';
// import SideChair from './SideChair';
// import SideTable from './SideTable';
import sideChair from '../../../../assets/images/side-chair.png';
import sideTable from '../../../../assets/images/side-table.png';
import { Link } from 'react-router-dom';
const SubBanner = () => {
  return (
    <div className="lg:flex justify-around bg-[#FAF4F4] py-10 lg:px-16 px-5">
      <div className="flex-col justify-center items-center ">
        <div>
          <img
            src={sideTable}
            alt=""
            className="lg:w-[500px] lg:h-[400px] lg:ml-0 ml-[-50px]"
          />
        </div>
        <div className=" mt-[-100px]">
          <h1 className="text-3xl  ml-28">Side Table</h1>
          <span className="ml-28 mt-2 inline-block">
            <Link
              to="/shop"
              className="border-b border-b-2 border-black font-bold hover:text-blue-500 hover:border-blue-500 duration-500"
            >
              View More
            </Link>
          </span>
        </div>
      </div>
      <div className="flex-col justify-center items-center lg:mr-28">
        <img
          src={sideChair}
          alt=""
          className=" lg:h-[400px] mx-auto  lg:ml-0 ml-[-50px] inline"
        />

        <div className=" mt-[-100px]">
          <h1 className="text-3xl  lg:ml-48 ml-28">Side Chair</h1>
          <span className="lg:ml-48 ml-28 mt-2 inline-block">
            <Link
              to="/shop"
              className="border-b border-b-2 border-black font-bold hover:text-blue-500 hover:border-blue-500 duration-500"
            >
              View More
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
