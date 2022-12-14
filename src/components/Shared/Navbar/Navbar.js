import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
// import Cart from '../../Pages/Cart/Cart';
import CartDropDown from '../../Pages/Cart/CartDropDown';
const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const li = (
    <>
      <CustomLink to="/home">
        <span className="lg:mx-4 mx-1">Home</span>
      </CustomLink>
      <CustomLink to="/shop">
        <span className="lg:mx-4 mx-1">Shop</span>
      </CustomLink>
      <CustomLink to="/about">
        <span className="lg:mx-4 mx-1">About</span>
      </CustomLink>
      <CustomLink to="/contact">
        <span className="lg:mx-4 mx-1">Contact</span>
      </CustomLink>
      <CustomLink to="/dashboard">
        <span className="lg:mx-4 mx-1">Dashboard</span>
      </CustomLink>
    </>
  );
  window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
      setScroll(true);
    } else if (window.scrollY < 150) {
      setScroll(false);
    }
  });
  return (
    <div
      className={`${
        scroll ? 'bg-yellow-200' : 'bg-yellow-100'
      } navbar  text-black lg:px-16 px-2 sticky top-0 z-10`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <MenuIcon />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content text-black mt-3 p-2 border-2 rounded-box w-56"
            style={{ backdropFilter: 'blur(8px)' }}
          >
            {li}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl" href="/home">
          daisyUI
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{li}</ul>
      </div>
      <div className="navbar-end">
        <CustomLink to="/search">
          <SearchIcon className="lg:mx-3 mx-2" />
        </CustomLink>
        <CustomLink to="/favorite">
          <FavoriteBorderIcon className="lg:mx-3 mx-2" />
        </CustomLink>
        <div className="dropdown dropdown-left  rounded-0">
          <label tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
            <ShoppingCartIcon className="lg:mx-3 mx-2" />
          </label>
          <div
            className={`${
              isOpen ? 'hidden text-red-500' : 'block'
            } duration-500`}
          >
            <CartDropDown />
          </div>
        </div>

        <CustomLink to="/profile">
          <PersonIcon className="lg:mx-3 mx-2" />
        </CustomLink>
      </div>
    </div>
  );
};

export default Navbar;
