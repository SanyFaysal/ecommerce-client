import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import sofa from '../../../../assets/images/Asgaard sofa 1.png';
const NewArrival = () => {
  return (
    <div className=" max-h-sm bg-yellow-50">
      <AnimatePresence>
        <div className=" lg:flex justify-around lg:px-16 px-5 py-6 items-center overflow-x-hidden">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{
              delay: 0.5,
              x: { duration: 1 },
              default: { ease: 'linear' },
            }}
          >
            <img
              src={sofa}
              className="lg:max-w-xl w-[300px] mx-auto rounded-lg "
              alt="banner-chair"
            />
          </motion.div>
          <div className="">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <h1 className="lg:text-3xl text-2xl  font-bold">New Arrival</h1>
              <h1 className="lg:text-6xl text-5xl  font-bold">Asgaard Sofa</h1>

              <div className="mt-6">
                <Link
                  to="/shop"
                  className="lg:text-3xl text-xl border px-3 py-1 inline-block mt-4 border-black"
                >
                  Order Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default NewArrival;
