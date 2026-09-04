import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Heart, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { cartCount, setCartDrawerOpen, wishlist } = useShop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Categories', path: '/categories' },
    { name: 'Orders', path: '/orders' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* Top Banner Announcement */}
      <div className="bg-charcoal-900 text-cream-100 text-[10px] sm:text-xs py-1.5 sm:py-2 px-3 text-center font-light tracking-widest uppercase border-b border-charcoal-800 flex items-center justify-center gap-1.5 sm:gap-2">
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-500 animate-pulse flex-shrink-0" />
        <span className="truncate">Complimentary Express Shipping on All Attar Oils</span>
      </div>

      <header className="sticky top-0 z-40 glass-nav border-b border-beige-200/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-charcoal-800 p-1.5 hover:text-gold-600 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-widest font-medium transition-all duration-200 relative py-1 ${
                    isActive ? 'text-charcoal-900' : 'text-charcoal-500 hover:text-charcoal-900'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold-600"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Store Logo */}
          <Link to="/" className="text-center group">
            <h1 className="font-serif text-lg sm:text-2xl md:text-3xl tracking-[0.15em] sm:tracking-[0.2em] font-normal text-charcoal-900 uppercase transition-colors group-hover:text-gold-700">
              SHAHBAZI STORE
            </h1>
            <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-charcoal-500 font-light -mt-0.5">
              Pure Perfume Oils
            </p>
          </Link>

          {/* Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-6">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-charcoal-700 hover:text-gold-700 transition-colors p-1.5"
              title="Search fragrances"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Wishlist Link */}
            <Link
              to="/shop?filter=saved"
              className="text-charcoal-700 hover:text-gold-700 transition-colors p-1.5 relative hidden sm:block"
              title="Saved fragrances"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-gold-600 rounded-full"></span>
              )}
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="bg-charcoal-900 hover:bg-charcoal-800 text-cream-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs tracking-wider uppercase font-medium flex items-center space-x-1.5 sm:space-x-2.5 transition-all duration-300 shadow-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-500" />
              <span className="hidden sm:inline">Bag</span>
              <span className="bg-gold-600 text-charcoal-950 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold min-w-[16px] sm:min-w-[18px] text-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Search Overlay Input */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-beige-200 bg-cream-50 overflow-hidden"
            >
              <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto px-4 py-3 sm:py-4 flex items-center gap-2 sm:gap-3">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search attars by note..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none focus:outline-none text-xs sm:text-sm text-charcoal-900 placeholder:text-charcoal-400 font-light"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="text-[11px] sm:text-xs uppercase tracking-wider text-charcoal-500 hover:text-charcoal-900 flex-shrink-0"
                >
                  Close
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer Menu - Quiet Luxury Redesign */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal-950/70 backdrop-blur-md md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="w-5/6 max-w-xs bg-cream-50 h-full p-6 sm:p-8 flex flex-col justify-between border-r border-beige-300 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-center pb-6 border-b border-beige-200">
                  <div>
                    <h2 className="font-serif text-lg tracking-[0.18em] text-charcoal-900 uppercase font-normal">
                      SHAHBAZI STORE
                    </h2>
                    <p className="text-[8px] uppercase tracking-[0.25em] text-gold-700 font-medium">
                      Quiet Luxury Attars
                    </p>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-charcoal-700 hover:text-gold-700 bg-cream-100 rounded-full transition-colors border border-beige-300/80"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Editorial Menu Links */}
                <nav className="mt-8 flex flex-col space-y-2">
                  {navLinks.map((link, idx) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group flex items-center justify-between py-3 px-3.5 rounded-xl transition-all duration-200 ${
                          isActive
                            ? 'bg-cream-200/80 text-charcoal-900 border border-gold-600/30'
                            : 'text-charcoal-700 hover:bg-cream-100 hover:text-charcoal-900'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-serif italic text-gold-700">
                            0{idx + 1}
                          </span>
                          <span className="text-xs uppercase tracking-[0.2em] font-medium">
                            {link.name}
                          </span>
                        </div>
                        <span className="text-gold-600 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </Link>
                    );
                  })}

                  {/* Saved Wishlist Link */}
                  <Link
                    to="/shop?filter=saved"
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between py-3 px-3.5 rounded-xl text-charcoal-700 hover:bg-cream-100 hover:text-charcoal-900 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-serif italic text-gold-700">05</span>
                      <span className="text-xs uppercase tracking-[0.2em] font-medium">
                        Wishlist
                      </span>
                    </div>
                    {wishlist.length > 0 && (
                      <span className="bg-gold-600 text-charcoal-950 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {wishlist.length}
                      </span>
                    )}
                  </Link>

                  {/* Shopping Bag Link */}
                  <Link
                    to="/cart"
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between py-3.5 px-4 rounded-xl bg-charcoal-900 text-cream-50 shadow-md mt-4 transition-all duration-200 hover:bg-gold-700"
                  >
                    <div className="flex items-center gap-2.5">
                      <ShoppingBag className="w-4 h-4 text-gold-500" />
                      <span className="text-xs uppercase tracking-[0.2em] font-medium">
                        Shopping Bag
                      </span>
                    </div>
                    <span className="bg-gold-600 text-charcoal-950 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {cartCount}
                    </span>
                  </Link>
                </nav>
              </div>

              {/* Bottom Luxury Footer */}
              <div className="pt-6 border-t border-beige-200 space-y-3">
                <div className="bg-cream-200/60 border border-beige-300/80 p-3.5 rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-gold-700 font-semibold">
                    <Sparkles className="w-3 h-3 text-gold-600" />
                    <span>Pure Distillation</span>
                  </div>
                  <p className="text-[10px] text-charcoal-600 font-light leading-snug">
                    100% Concentrated Attar Oils • Free Shipping Above ₹999
                  </p>
                </div>
                <p className="text-[10px] text-charcoal-500 font-light text-center pt-1">
                  Engineered by{' '}
                  <a
                    href="https://www.instagram.com/faiz_imam__/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-700 hover:text-gold-800 font-medium underline underline-offset-2 decoration-gold-600/40 transition-colors"
                  >
                    Faiz.I
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
