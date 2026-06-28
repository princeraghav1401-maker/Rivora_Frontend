import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/navbar/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Sale from './pages/Sale';
import Contact from './pages/Contact';
import About from './pages/About';
import Wishlist from './pages/Wishlist';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';

export default function App() {
  const [category, setCategory] = useState('All');
  const location = useLocation();
  return (
    <div className="min-h-screen bg-forest-900 text-cream">
      <Navbar setCategory={setCategory} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home category={category} setCategory={setCategory} />} />
          <Route path="/collections" element={<Collections category={category} setCategory={setCategory} />} />
          <Route path="/sale" element={<Sale setCategory={setCategory} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <CartDrawer />
    </div>
  );
}
