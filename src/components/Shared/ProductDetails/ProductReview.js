import React from 'react';

const ProductReview = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold text-xl">All Reviews</h1>
          <p>
            Get specific details about this product from customers who own it.
          </p>
        </div>
        <div>
          <button className="btn btn-accent btn-sm">Write a Review</button>
        </div>
      </div>
      <div className=" flex  items-center my-5" id="review">
        <div>
          <div className="mb-3">
            <div className="flex ">
              <div className="avatar mr-1">
                <div className="w-10 h-10 rounded-full">
                  <img src="https://placeimg.com/191/191/people" alt="" />
                </div>
              </div>
              <div>
                <h1 className="font-bold">Mr Neymar Junior</h1>
                <p>Lorem ipsum dolor sit amet consectetur adip dicta!</p>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="flex ">
              <div className="avatar mr-1">
                <div className="w-10 h-10 rounded-full">
                  <img src="https://placeimg.com/192/192/people" alt="" />
                </div>
              </div>
              <div>
                <h1 className="font-bold">Andrio Lional Messi</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat,Lorem, ipsum. dicta!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex ">
              <div className="avatar mr-1">
                <div className="w-10 h-10 rounded-full">
                  <img src="https://placeimg.com/194/194/people" alt="" />
                </div>
              </div>
              <div>
                <h1 className="font-bold">Ronaldo King </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                  amet. adipisicing elit. Fugiat, dicta!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
