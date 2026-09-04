import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer: React.FC = () => {
  const { cart, cartDrawerOpen, setCartDrawerOpen, removeFromCart, updateQuantity, cartTotal } = useShop();
  const navigate = useNavigate();

  const FREE_SHIPPING_THRESHOLD = 200;
  const progressPercent = Math.min((cartTotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const remainingForFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - cartTotal, 0);

  const handleCheckoutClick = () => {
    setCartDrawerOpen(false);
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-charcoal-950/60 backdrop-blur-sm"
            onClick={() => setCartDrawerOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="w-screen max-w-md bg-cream-50 text-charcoal-900 shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="p-6 border-b border-beige-200 flex items-center justify-between bg-cream-100">
                <div className="flex items-center space-x-3">
                  <ShoppingBag className="w-5 h-5 text-gold-600" />
                  <h2 className="font-serif text-2xl font-normal uppercase tracking-wider text-charcoal-900">
                    Your Selection
                  </h2>
                </div>
                <button
                  onClick={() => setCartDrawerOpen(false)}
                  className="p-2 text-charcoal-500 hover:text-charcoal-900 transition-colors"
                  aria-label="Close cart drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress Indicator */}
              <div className="bg-beige-100/80 px-6 py-3 border-b border-beige-200 text-xs">
                {remainingForFreeShipping > 0 ? (
                  <p className="text-charcoal-700 font-light mb-1.5">
                    Add <span className="font-semibold text-charcoal-900">${remainingForFreeShipping.toFixed(0)}</span> more for complimentary express delivery.
                  </p>
                ) : (
                  <p className="text-gold-700 font-medium mb-1.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-gold-600" />
                    Complimentary Express Delivery Unlocked
                  </p>
                )}
                <div className="w-full bg-beige-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gold-600 h-full transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                    <div className="w-16 h-16 rounded-full bg-beige-100 flex items-center justify-center text-charcoal-400">
                      <ShoppingBag className="w-8 h-8 stroke-1" />
                    </div>
                    <p className="font-serif text-xl text-charcoal-700">Your bag is empty</p>
                    <p className="text-xs text-charcoal-500 font-light max-w-xs">
                      Discover our handcrafted pure attars and elevate your scent profile.
                    </p>
                    <Link
                      to="/shop"
                      onClick={() => setCartDrawerOpen(false)}
                      className="mt-4 bg-charcoal-900 text-cream-50 px-6 py-3 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-gold-700 transition-colors"
                    >
                      Explore Collection
                    </Link>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedSize}`}
                      className="flex space-x-4 pb-6 border-b border-beige-200/80 last:border-none"
                    >
                      {/* Image */}
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-20 h-24 object-cover rounded-xl bg-beige-100 border border-beige-200/60"
                      />

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-serif text-lg font-medium text-charcoal-900">
                              {item.product.name}
                            </h3>
                            <button
                              onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                              className="text-charcoal-400 hover:text-red-600 transition-colors p-1"
                              title="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="text-xs text-charcoal-500 font-light mt-0.5 space-x-2">
                            <span>Size: <strong className="font-medium text-charcoal-800">{item.selectedSize}</strong></span>
                            <span>•</span>
                            <span>{item.product.category}</span>
                          </div>
                        </div>

                        {/* Quantity controls & Price */}
                        <div className="flex justify-between items-center pt-2">
                          <div className="flex items-center space-x-2 border border-beige-300 rounded-lg px-2 py-1 bg-white">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.selectedSize, -1)}
                              className="text-charcoal-600 hover:text-charcoal-900 p-0.5"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-semibold px-2">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.selectedSize, 1)}
                              className="text-charcoal-600 hover:text-charcoal-900 p-0.5"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <span className="font-serif text-base text-charcoal-900 font-medium">
                            ${(item.unitPrice * item.quantity).toFixed(0)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Summary */}
              {cart.length > 0 && (
                <div className="p-6 bg-cream-100 border-t border-beige-200 space-y-4">
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-charcoal-600">
                      <span>Subtotal</span>
                      <span className="font-serif text-sm font-medium text-charcoal-900">${cartTotal.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between text-charcoal-600">
                      <span>Shipping</span>
                      <span className="text-gold-700 font-medium">
                        {remainingForFreeShipping === 0 ? 'Complimentary' : 'Calculated at checkout'}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-beige-200 flex justify-between items-center text-sm font-medium">
                    <span className="uppercase tracking-wider text-charcoal-900 font-semibold">Total</span>
                    <span className="font-serif text-2xl text-charcoal-900 font-semibold">${cartTotal.toFixed(0)}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <Link
                      to="/cart"
                      onClick={() => setCartDrawerOpen(false)}
                      className="w-full text-center border border-charcoal-800 text-charcoal-900 py-3 rounded-xl text-xs font-medium uppercase tracking-wider hover:bg-beige-200 transition-colors"
                    >
                      View Cart
                    </Link>
                    <button
                      onClick={handleCheckoutClick}
                      className="w-full bg-charcoal-900 hover:bg-gold-700 text-cream-50 py-3 rounded-xl text-xs font-medium uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors shadow-md"
                    >
                      <span>Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[10px] text-center text-charcoal-500 font-light pt-1">
                    Tax included. Pure non-alcoholic attar oils packaged in velvet wood boxes.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
