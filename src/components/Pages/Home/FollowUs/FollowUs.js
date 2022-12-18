import React from 'react';
import followUs from '../../../../assets/images/follow-us.png';
const FollowUs = () => {
  return (
    <div
      className="text-center flex justify-center items-center h-[50vh] w-[100%] "
      style={{
        backgroundImage: `url(${followUs})`,

        backgroundSize: 'cover',
      }}
    >
      <div className="my-auto w-full">
        <h1 className="text-5xl font-bold">Our Instagram </h1>
        <p className="text-lg font-semibold mt-2">
          Follow our store on instagram
        </p>
        <button className="text-2xl shadow-xl btn font-bold px-8 py-2 border mt-5 inline-block  rounded-full">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default FollowUs;
