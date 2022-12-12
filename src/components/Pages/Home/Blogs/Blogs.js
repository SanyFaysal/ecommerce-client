import React from 'react';
import { Link } from 'react-router-dom';
import blogImg from '../../../../assets/images/product1.png';
import Blog from '../../../Shared/Blog/Blog';
const Blogs = () => {
  const blogs = [
    {
      blogImg: blogImg,
      blogTitle: 'Find A good Chair',
      blogDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, asperiores',
      postedOn: '',
      liked: 5,
      unliked: 0,
      comments: [],
    },
    {
      blogImg: blogImg,
      blogTitle: 'Make House awesome',
      blogDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, asperiores',
      blogTime: '',
      liked: 7,
      unliked: 2,
      comments: [],
    },
    {
      blogImg: blogImg,
      blogTitle: 'Dream comes true',
      blogDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, asperiores',
      blogTime: '',
      liked: 10,
      unliked: 1,
      comments: [],
    },
    {
      blogImg: blogImg,
      blogTitle: 'Gorgeous Looks from Gorgeous Furniture',
      blogDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, asperiores',
      blogTime: '',
      liked: 13,
      unliked: 3,
      comments: [],
    },
  ];
  return (
    <div className="my-16 lg:px-16 ">
      <h1 className="text-center text-4xl font-bold mt-10 ">Our Blogs</h1>
      <div className="w-[70px] py-[2px] bg-gray-500 rounded-lg mx-auto"></div>
      <p className="text-center  text-xl mt-2">
        Find a bright ideal to suit your with our great selection of suspension,
        floor and table lights{' '}
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-16">
        {blogs.map((blog, index) => (
          <Blog key={index} blog={blog} />
        ))}
      </div>
      <div className=" mx-auto my-10">
        <h3 className="text-center">
          <Link
            to="/shop"
            className="border-b border-b-2 text-2xl border-black"
          >
            View More
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Blogs;
