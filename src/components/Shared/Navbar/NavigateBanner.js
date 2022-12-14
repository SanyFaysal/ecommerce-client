import React from 'react';
import { Link } from 'react-router-dom';
import navigation_bg from '../../../assets/images/navgation-bg.png';
import titleImg from '../../../assets/images/navigation-title-img.png';
const NavigateBanner = ({ title, navigateFrom, navigateTo }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${navigation_bg})`,
      }}
      className="py-12 flex justify-center items-center"
    >
      <div className="mx-auto text-center ">
        <img src={titleImg} alt="" className="mx-auto w-50 h-50" />
        <h1 className="text-5xl font-semibold mt-[-12px] my-auto uppercase">{title} </h1>
        <div className="text-sm breadcrumbs mx-auto">
          <ul className="flex justify-center">
            <li>
              <Link to={`/${navigateFrom}`} className="capitalize">
                {navigateFrom}
              </Link>
            </li>
            <li>
              <Link to={`/${navigateTo}`} className="capitalize">
                {navigateTo}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigateBanner;
