import React from 'react';
import descriptionImg from '../../../assets/images/Asgaard sofa 1.png';
const ProductDescription = () => {
  return (
    <div className="lg:p-16  p-4">
      <div>
        <h1 className="font-semibold mb-2 text-xl">Ashgaard Gaming Chair</h1>
        <p>
          Ashgaard Gaming Chair is made of premium quality material with an
          ergonomic design. It gives you proper comfort. Here a synchro-tilt
          mechanism is used so that the user can use it in any position with
          adjustment in any situation. So you can enjoy a rocking motion chair
          by rolling it. Users can tilt 140 degrees in the back position with
          adjustment. Ergon Heart provides the best service for people who need
          to sit for a long time for their work and need to relax for some time.
          It is made with a 5-star metal base with a smooth PU caster wheel with
          premium quality mesh cloth. It helps you to move on every side by
          rotating 360 degrees.
        </p>
        <h1 className="font-semibold my-2 text-xl">2D Adjustable Headrest</h1>
        <p>
          The Ergon Heart Gaming Chair provides you with 2D adjustable heardest
          which helps you by supporting your neck while you are angling up and
          down at the position you sit in. It enables you to adjust the handles
          according to your needs.
        </p>
        <h1 className="font-semibold my-2 text-xl">
          Comfort Enhancing Features
        </h1>
        <p>
          The Ergon Heart provides the best support for the human body. This
          Gaming chair offers height adjustability, lumber support, and neck
          support which gives you proper and comfortable support for your body.
          It enables you to enjoy your gaming sessions more comfortably.
        </p>
      </div>
      <div className="lg:flex justify-center">
        <img src={descriptionImg} alt="" className="w-[70vh] p-5" />
        <img src={descriptionImg} alt="" className="w-[70vh] p-5" />
      </div>
    </div>
  );
};

export default ProductDescription;
