import React from 'react';
import SideChair from './SideChair';
import SideTable from './SideTable';

const SubBanner = () => {
  return (
    <div className="flex justify-around bg-[#FAF4F4] py-10">
      <SideTable />
      <SideChair />
    </div>
  );
};

export default SubBanner;
