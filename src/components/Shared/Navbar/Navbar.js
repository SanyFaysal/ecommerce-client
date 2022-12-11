import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  const li = (
    <>
      <CustomLink to="/home">
        <span className="mx-4">Home</span>
      </CustomLink>
      <CustomLink to="/shop">
        <span className="mx-4">Shop</span>
      </CustomLink>
      <CustomLink to="/about">
        <span className="mx-4">About</span>
      </CustomLink>
      <CustomLink to="/contact">
        <span className="mx-4">Contact</span>
      </CustomLink>
    </>
  );
  return (
    <div className="navbar bg-black text-white lg:px-16">
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
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{li}</ul>
      </div>
      <div className="navbar-end">
        <CustomLink to="/search">
          <SearchIcon className="mx-3" />
        </CustomLink>
        <CustomLink to="/favorite">
          <FavoriteBorderIcon className="mx-3" />
        </CustomLink>

        <CustomLink to="/cart">
          <ShoppingCartIcon className="mx-3" />
        </CustomLink>
        <CustomLink to="/profile">
          <PersonIcon className="mx-3" />
        </CustomLink>
      </div>
    </div>
  );
};

export default Navbar;
