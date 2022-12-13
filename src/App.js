import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Shop from './components/Pages/Shop/Shop';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import ProductDetails from './components/Shared/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/productDetails" element={<ProductDetails />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
