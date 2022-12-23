import { Route, Routes } from 'react-router-dom';
import Cart from './components/Pages/Cart/Cart';
import Home from './components/Pages/Home/Home';
import Shop from './components/Pages/Shop/Shop';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import ProductAdditionalInfo from './components/Shared/ProductDetails/ProductAdditionalInfo';
import ProductDescription from './components/Shared/ProductDetails/ProductDescription';
import ProductDetails from './components/Shared/ProductDetails/ProductDetails';
import ProductReview from './components/Shared/ProductDetails/ProductReview';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Checkout from './components/Pages/Checkout/Checkout';
import Payment from './components/Pages/Payment/Payment';
import Login from './components/Pages/Login/Login';
import Signup from './components/Pages/Login/Signup';

function App() {
  const [scroll, setScroll] = useState(false);
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
      setScroll(true);
    } else if (window.scrollY <= 200) {
      setScroll(false);
    }
  });
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/productDetails/:id" element={<ProductDetails />}>
          <Route index element={<ProductDescription />}></Route>
          <Route path="description" element={<ProductDescription />}></Route>
          <Route
            path="additionalInfo"
            element={<ProductAdditionalInfo />}
          ></Route>
          <Route path="review" element={<ProductReview />}></Route>
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer />
      {scroll && (
        <div className="w-10 h-10 flex duration-500 justify-center items-center bg-gray-200 rounded-full fixed bottom-10 right-12">
          <IconButton aria-label="" onClick={() => window.scrollTo(0, 0)}>
            <KeyboardDoubleArrowUpIcon
              className=""
              sx={{ fontSize: '25px', color: 'orange' }}
            />
          </IconButton>
        </div>
      )}
    </div>
  );
}

export default App;
