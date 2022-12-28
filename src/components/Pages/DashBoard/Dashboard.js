import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="z-0 ">
      <div className="z-0 drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="z-0 drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <div className="overflow-x-auto overflow-y-scroll w-full  rounded border-l ">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side z-0  rounded ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 shadow-black   text- shadow-lg text-base-content sticky top-16 z-0">
            <li>
              <Link to="products">Products</Link>
            </li>
            <li>
              <Link to="users">Users</Link>
            </li>
            <li>
              <Link to="blogs">BLogs</Link>
            </li>
            <li className="py-[0.1px] mx-[-16px] shadow-2xl bg-gray-300"></li>
            <li>
              <a>Add Product</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
