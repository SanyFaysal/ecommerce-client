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

function App() {
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
