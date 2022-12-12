import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../../assets/images/banner-chair.png';
const Banner2 = () => {
  return (
    <div className="hero max-h-sm bg-yellow-100">
      <AnimatePresence>
        <div className="hero-content flex-col justify-between lg:flex-row-reverse overflow-x-hidden">
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{
              delay: 0.5,
              x: { duration: 1 },
              default: { ease: 'linear' },
            }}
          >
            <img
              src={chair}
              className="lg:max-w-xl max-w-sm mx-auto rounded-lg "
              alt="banner-chair"
            />
          </motion.div>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <h1 className="lg:text-6xl text-4xl  font-bold">
                Rocket Singer seater
              </h1>

              <div className="mt-6">
                <Link to="/shop" className="lg:text-3xl text-xl">
                  Shop Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Banner2;
