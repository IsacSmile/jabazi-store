import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductDetailModal from "./components/ProductDetailModal";
import CartDrawer from "./components/CartDrawer";
import CheckoutModal from "./components/CheckoutModal";
import OrderHistory from "./components/OrderHistory";
import Footer from "./components/Footer";
import SkeletonLoader from "./components/SkeletonLoader";
import SearchModal from "./components/SearchModal";
import ToastNotification from "./components/ToastNotification";
import { PRODUCTS, DUMMY_INITIAL_ORDERS } from "./data/products";

export default function App() {
  // Loading state
  const [loading, setLoading] = useState(true);
  const [skeletonFade, setSkeletonFade] = useState(false);

  // Tab Navigation: 'home' | 'shop' | 'categories' | 'orders'
  const [activeTab, setActiveTab] = useState("home");

  // Filter & Search states
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Modal / Drawer states
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Toast Notification state
  const [toast, setToast] = useState(null);

  // Persistent Cart state from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("jabazi_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persistent Orders state from localStorage
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem("jabazi_orders");
      return saved ? JSON.parse(saved) : DUMMY_INITIAL_ORDERS;
    } catch {
      return DUMMY_INITIAL_ORDERS;
    }
  });

  // Sync Cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("jabazi_cart", JSON.stringify(cart));
    } catch (err) {
      console.error("Failed to save cart to localStorage", err);
    }
  }, [cart]);

  // Sync Orders to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("jabazi_orders", JSON.stringify(orders));
    } catch (err) {
      console.error("Failed to save orders to localStorage", err);
    }
  }, [orders]);

  // Handle initial loader fade out
  useEffect(() => {
    const timer = setTimeout(() => {
      setSkeletonFade(true);
      setTimeout(() => setLoading(false), 500);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Show Toast helper
  const showToast = (title, message) => {
    setToast({ title, message });
    setTimeout(() => setToast(null), 3000);
  };

  // Cart Functions
  const handleAddToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: quantity,
          image: product.image,
          volume: product.volume
        }
      ];
    });

    showToast("Added to Cart", `${product.name} (${quantity}) added to your shopping bag.`);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    const itemToRemove = cart.find(i => i.id === id);
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    if (itemToRemove) {
      showToast("Item Removed", `${itemToRemove.name} removed from cart.`);
    }
  };

  // Buy Now Handler (adds to cart & opens checkout)
  const handleBuyNow = (product, quantity = 1) => {
    handleAddToCart(product, quantity);
    setIsCheckoutOpen(true);
  };

  // Place Order Handler
  const handlePlaceOrder = (newOrder) => {
    setOrders((prevOrders) => [newOrder, ...prevOrders]);
    setCart([]);
    setActiveTab("orders");
    showToast(
      "Order Confirmed!",
      `Order #${newOrder.id} successfully placed. View your tracking details below.`
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#191715] flex flex-col font-sans relative">
      
      {/* Initial Skeleton Loader */}
      {loading && <SkeletonLoader fadeOut={skeletonFade} />}

      {/* Main Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        ordersCount={orders.length}
      />

      {/* Dynamic View Sections */}
      <main className="flex-1">
        {activeTab === "orders" ? (
          <OrderHistory
            orders={orders}
            onShopClick={() => {
              setActiveTab("shop");
              const el = document.getElementById("shop-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />
        ) : (
          <>
            {/* Hero Section */}
            <Hero
              onShopClick={() => {
                setActiveTab("shop");
                const el = document.getElementById("shop-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            />

            {/* Categories Section */}
            <Categories
              selectedCategory={selectedCategory}
              onSelectCategory={(catId) => {
                setSelectedCategory(catId);
                setActiveTab("shop");
              }}
            />

            {/* Featured Products Collection */}
            <FeaturedProducts
              products={PRODUCTS}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              onAddToCart={handleAddToCart}
              onSelectProduct={setSelectedProduct}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavClick={(id) => {
          setActiveTab(id);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cart}
        onPlaceOrder={handlePlaceOrder}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={setSelectedProduct}
      />

      {/* Toast Notification */}
      <ToastNotification toast={toast} onClose={() => setToast(null)} />

    </div>
  );
}
