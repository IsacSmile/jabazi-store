import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { CartDrawer } from './components/CartDrawer';
import { Toast } from './components/Toast';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Categories } from './pages/Categories';
import { CartPage } from './pages/CartPage';
import { Checkout } from './pages/Checkout';
import { OrderHistory } from './pages/OrderHistory';

// Scroll To Top component on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <ShopProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-cream-100 text-charcoal-900 selection:bg-gold-500/30">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orders" element={<OrderHistory />} />
            </Routes>
          </main>

          <CartDrawer />
          <Toast />
          <Footer />
        </div>
      </Router>
    </ShopProvider>
  );
};

export default App;
