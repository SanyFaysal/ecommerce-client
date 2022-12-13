import React, { useState } from 'react';

const ProductImg = () => {
  const defaultImg =
    'https://media.istockphoto.com/id/869078270/photo/armchair-isolated-on-white-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=BSBGae3sdyCHLH911Iv3mplZFoCbjq22ryBMqGpC5Rk=';
  const [img, setImg] = useState(defaultImg);
  return (
    <div className="grid grid-cols-12 gap-5 lg:pb-0 pb-10">
      <div className="col-span-2 flex-col ">
        <img
          src="https://media.istockphoto.com/id/1199428736/photo/turquoise-arm-chair-isolated-on-white-background-front-view-of-upholstered-wingback-accent.jpg?s=612x612&w=0&k=20&c=llAcD0t5fcHgyyPgPoh6S866k2kIQYSjAtLwOwoZ4W8="
          alt=""
          onClick={() =>
            setImg(
              'https://media.istockphoto.com/id/1199428736/photo/turquoise-arm-chair-isolated-on-white-background-front-view-of-upholstered-wingback-accent.jpg?s=612x612&w=0&k=20&c=llAcD0t5fcHgyyPgPoh6S866k2kIQYSjAtLwOwoZ4W8='
            )
          }
          className="border border-yellow-500 rounded lg:h-[75px] lg:w-[80px] h-[50px] w-[50px] mb-3"
        />
        <img
          src="https://media.istockphoto.com/id/1199428736/photo/turquoise-arm-chair-isolated-on-white-background-front-view-of-upholstered-wingback-accent.jpg?s=612x612&w=0&k=20&c=llAcD0t5fcHgyyPgPoh6S866k2kIQYSjAtLwOwoZ4W8="
          alt=""
          onClick={() =>
            setImg(
              'https://media.istockphoto.com/id/1199428736/photo/turquoise-arm-chair-isolated-on-white-background-front-view-of-upholstered-wingback-accent.jpg?s=612x612&w=0&k=20&c=llAcD0t5fcHgyyPgPoh6S866k2kIQYSjAtLwOwoZ4W8='
            )
          }
          className="border border-yellow-500 rounded lg:h-[75px] lg:w-[80px] h-[50px] w-[50px] mb-3"
        />
        <img
          src="https://media.istockphoto.com/id/1199428736/photo/turquoise-arm-chair-isolated-on-white-background-front-view-of-upholstered-wingback-accent.jpg?s=612x612&w=0&k=20&c=llAcD0t5fcHgyyPgPoh6S866k2kIQYSjAtLwOwoZ4W8="
          alt=""
          onClick={() =>
            setImg(
              'https://media.istockphoto.com/id/1199428736/photo/turquoise-arm-chair-isolated-on-white-background-front-view-of-upholstered-wingback-accent.jpg?s=612x612&w=0&k=20&c=llAcD0t5fcHgyyPgPoh6S866k2kIQYSjAtLwOwoZ4W8='
            )
          }
          className="border border-yellow-500 rounded lg:h-[75px] lg:w-[80px] h-[50px] w-[50px] mb-3"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJnEqRgbmErnxHZ5KxmikjZsXYG5XrNPw_6CgE2Iwy&s"
          alt=""
          onClick={() =>
            setImg(
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJnEqRgbmErnxHZ5KxmikjZsXYG5XrNPw_6CgE2Iwy&s'
            )
          }
          className="border border-yellow-500 rounded lg:h-[75px] lg:w-[80px] h-[50px] w-[50px] mb-3"
        />
        <img
          src="https://media.istockphoto.com/id/1199428736/photo/turquoise-arm-chair-isolated-on-white-background-front-view-of-upholstered-wingback-accent.jpg?s=612x612&w=0&k=20&c=llAcD0t5fcHgyyPgPoh6S866k2kIQYSjAtLwOwoZ4W8="
          alt=""
          onClick={() =>
            setImg(
              'https://media.istockphoto.com/id/1199428736/photo/turquoise-arm-chair-isolated-on-white-background-front-view-of-upholstered-wingback-accent.jpg?s=612x612&w=0&k=20&c=llAcD0t5fcHgyyPgPoh6S866k2kIQYSjAtLwOwoZ4W8='
            )
          }
          className="border border-yellow-500 rounded lg:h-[75px] lg:w-[80px] h-[50px] w-[50px] mb-3"
        />
        <img
          src={defaultImg}
          alt=""
          onClick={() => setImg(defaultImg)}
          className="border border-yellow-500 rounded lg:h-[75px] lg:w-[80px] h-[50px] w-[50px] mb-3"
        />
      </div>
      <div className="col-span-10">
        <img
          src={img}
          alt=""
          className="border lg:w-[500px] w-[400px] duration-500 lg:h-[500px] h-[375px] border-yellow-300"
        />
      </div>
    </div>
  );
};

export default ProductImg;
