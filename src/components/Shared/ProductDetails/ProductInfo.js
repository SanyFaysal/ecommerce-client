import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
const ProductInfo = () => {
  const [size, setSize] = useState('L');
  const [color, setColor] = useState('L');
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold">Ashgaard Sofa</h1>
        <h2 className="font-bold text-gray-500 text-xl mt-1">
          BDT - 78000 Taka
        </h2>
      </div>
      <div className="flex mt-2 ">
        <span className="border-r border-gray-400 my-auto pr-5 ">
          <StarIcon className="text-yellow-500" sx={{ fontSize: '20px' }} />
          <StarIcon className="text-yellow-500" sx={{ fontSize: '20px' }} />
          <StarIcon className="text-yellow-500" sx={{ fontSize: '20px' }} />
          <StarIcon className="text-yellow-500" sx={{ fontSize: '20px' }} />
          <StarBorderIcon
            className="text-yellow-500"
            sx={{ fontSize: '20px' }}
          />
        </span>
        <span className="text-lg font-semibold ml-5 text-gray-500">
          5 Customers Review
        </span>
      </div>

      <p className="my-3">
        Siting Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
        expedita quibusdam! Pariatur quaerat quidem vitae inventore voluptatibus
        iure, consequatur laborum totam explicabo beatae odio exercitationem
        consectetur dolores aut eligendi quisquam.
      </p>
      <div>
        <h1 className="text-xl font-semibold text-gray-500">Size </h1>
        <div className="mt-3">
          <button
            onClick={() => setSize('L')}
            className={`${
              size === 'L' ? 'btn-warning' : 'btn-outline'
            } btn btn-sm    hover:bg-yellow-500 hover:border-yellow-500 hover:text-black`}
          >
            L
          </button>
          <button
            onClick={() => setSize('XL')}
            className={`${
              size === 'XL' ? 'btn-warning' : 'btn-outline'
            } btn btn-sm mx-3 hover:bg-yellow-500 hover:border-yellow-500 hover:text-black `}
          >
            XL
          </button>
          <button
            onClick={() => setSize('XS')}
            className={`${
              size === 'XS' ? 'btn-warning' : 'btn-outline'
            } btn btn-sm  hover:bg-yellow-500 hover:border-yellow-500 hover:text-black `}
          >
            XS
          </button>
        </div>

        <h1 className="text-xl font-semibold text-gray-500 mt-5">Color </h1>
        <div className="mt-3 flex ">
          <p
            onClick={() => setColor('bg-black')}
            className={`${
              color === 'bg-black' && 'border-4'
            } w-7 h-7 bg-black rounded-full hover:border-4 border-yellow-500`}
          ></p>
          <p
            onClick={() => setColor('bg-blue-500')}
            className={`${
              color === 'bg-blue-500' && 'border-4'
            } w-7 h-7 bg-blue-500 rounded-full hover:border-4 border-yellow-500 mx-3`}
          ></p>
          <p
            onClick={() => setColor('bg-red-500')}
            className={`${
              color === 'bg-red-500' && 'border-4'
            } w-7 h-7 bg-red-500 rounded-full hover:border-4 border-yellow-500`}
          ></p>
        </div>
      </div>
      <h1 className="text-xl font-semibold text-gray-500 mt-5">Quantity </h1>
      <div className="flex items-center mt-2 ml-[-10px]">
        <div className="flex items-center">
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => {
              if (quantity <= 0) {
                return;
              }
              setQuantity(quantity - 1);
            }}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <p className="w-[100px] bg-gray-200 py-2 rounded-lg shadow text-center my-auto text-xl px-3 ">
            {quantity}
          </p>
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setQuantity(quantity + 1)}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <button className="btn px-8 btn-warning ml-6 block">
          {' '}
          ADd to cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
