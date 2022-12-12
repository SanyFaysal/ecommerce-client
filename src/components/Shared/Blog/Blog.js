import React, { useState } from 'react';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
const Blog = ({ blog }) => {
  const { blogImg, blogTitle, blogDesc, blogTime, liked, unliked, comments } =
    blog;
  const [isLike, setIsLike] = useState(false);
  const [isUnLike, setIsUnLike] = useState(false);
  return (
    <div className="flex-col justify-center items-center shadow p-5 rounded">
      <img src={blogImg} className="w-[200px] h-[250px] mx-auto" alt="" />
      <div className="">
        <div className="">
          <h4 className=" font-semibold text-lg">{blogTitle}</h4>
        </div>
        <p className="">{blogDesc.slice(0, 30)}...</p>
        <div className="flex justify-between items-center mt-3">
          <div
            onClick={() => setIsLike(!isLike)}
            className="ml-1 flex items-center"
          >
            <div className="w-[20px] inline-block">
              {isLike ? (
                <>
                  {' '}
                  <ThumbUpAltIcon className="text-blue-500" />
                </>
              ) : (
                <ThumbUpOffAltIcon className="hover:text-blue-500" />
              )}
            </div>
            <span className="font-bold ml-1"> {liked}</span>
          </div>
          <div onClick={() => setIsUnLike(!isUnLike)} className="ml-1">
            <div className="w-[20px] inline-block">
              {isUnLike ? (
                <>
                  {' '}
                  <ThumbDownAltIcon className="text-blue-500 " />
                </>
              ) : (
                <ThumbDownOffAltIcon className="hover:text-blue-500  " />
              )}
            </div>
            <span className="font-bold ml-1"> {unliked}</span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
