import React from 'react';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import FollowUs from './FollowUs/FollowUs';
import NewArrival from './NewArrival/NewArrival';
import SubBanner from './SubBanner/SubBanner';
import SuggestedPics from './SuggestedPics/SuggestedPics';

const Home = () => {
  return (
    <div className="">
      <Banner />
      <SubBanner />
      <SuggestedPics />
      <NewArrival />
      <Blogs />
      <FollowUs />
    </div>
  );
};

export default Home;
