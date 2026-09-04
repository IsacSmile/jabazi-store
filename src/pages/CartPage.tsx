import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag, Check } from 'lucide-react';

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useShop();
  const navigate = useNavigate();

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  const FREE_SHIPPING_THRESHOLD = 5000;
  const progressPercent = Math.min((cartTotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const remainingForFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - cartTotal, 0);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'SHAHBAZI10') {
      setDiscount(cartTotal * 0.1);
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid code. Use "SHAHBAZI10" for 10% privilege discount.');
    }
  };

  const finalTotal = Math.max(0, cartTotal - discount);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6 sm:space-y-10">
      
      {/* Header */}
      <div className="border-b border-beige-200 pb-4 sm:pb-6 flex flex-row items-end justify-between gap-2">
        <div>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold-700 font-medium">Your Sanctuary Bag</span>
          <h1 className="font-serif text-2xl sm:text-4xl text-charcoal-900 font-light mt-0.5">
            Shopping Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </h1>
        </div>

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="text-[11px] sm:text-xs text-charcoal-500 hover:text-red-600 font-light underline whitespace-nowrap"
          >
            Clear Bag
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="bg-cream-50 border border-beige-200 rounded-2xl sm:rounded-3xl p-10 sm:p-16 text-center space-y-3 max-w-lg mx-auto">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-beige-100 flex items-center justify-center mx-auto text-charcoal-400">
            <ShoppingBag className="w-7 h-7 sm:w-8 sm:h-8 stroke-1" />
          </div>
          <h2 className="font-serif text-xl sm:text-2xl text-charcoal-900">Your Bag is Empty</h2>
          <p className="text-xs text-charcoal-600 font-light">
            You haven't selected any pure attar oils yet. Explore our handcrafted collection to find your personal scent signature.
          </p>
          <div className="pt-2">
            <Link
              to="/shop"
              className="bg-charcoal-900 hover:bg-gold-700 text-cream-50 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-xs font-medium uppercase tracking-widest inline-block transition-colors"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          
          {/* Left Column: Cart Items List */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            
            {/* Free Shipping Banner */}
            <div className="bg-cream-50 border border-beige-200 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-xs space-y-2">
              <div className="flex justify-between items-center text-charcoal-800 text-[11px] sm:text-xs">
                <span className="font-medium">
                  {remainingForFreeShipping > 0
                    ? `Add ₹${remainingForFreeShipping.toLocaleString('en-IN')} more for Express Shipping`
                    : '🎉 Qualified for Express Shipping!'}
                </span>
                <span className="text-gold-700 font-semibold">{progressPercent.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-beige-200 h-1.5 sm:h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gold-600 h-full transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Items Table / Cards */}
            <div className="bg-white border border-beige-200 rounded-2xl sm:rounded-3xl divide-y divide-beige-200 overflow-hidden shadow-sm">
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="p-4 sm:p-6 flex flex-row items-center justify-between gap-3 sm:gap-6"
                >
                  <div className="flex space-x-3 sm:space-x-4 items-center flex-1 min-w-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-16 h-20 sm:w-20 sm:h-24 object-cover rounded-xl bg-beige-100 border border-beige-200 flex-shrink-0"
                    />

                    <div className="space-y-0.5 sm:space-y-1 min-w-0 flex-1">
                      <span className="bg-beige-100 text-charcoal-800 text-[9px] sm:text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-full font-medium inline-block">
                        {item.product.category}
                      </span>
                      <Link to={`/product/${item.product.id}`} className="block font-serif text-base sm:text-xl font-medium text-charcoal-900 hover:text-gold-700 truncate">
                        {item.product.name}
                      </Link>
                      <div className="text-[10px] sm:text-xs text-charcoal-500 font-light truncate">
                        Size: <strong className="font-medium text-charcoal-800">{item.selectedSize}</strong> • ₹{item.unitPrice.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-6 flex-shrink-0">
                    {/* Quantity controls */}
                    <div className="flex items-center space-x-1.5 sm:space-x-2 bg-cream-50 border border-beige-300 rounded-lg px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, -1)}
                        className="text-charcoal-600 hover:text-charcoal-900 p-0.5"
                      >
                        <Minus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, 1)}
                        className="text-charcoal-600 hover:text-charcoal-900 p-0.5"
                      >
                        <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </button>
                    </div>

                    {/* Total Price & Remove */}
                    <div className="flex items-center space-x-2">
                      <span className="font-serif text-base sm:text-xl font-semibold text-charcoal-900">
                        ₹{(item.unitPrice * item.quantity).toLocaleString('en-IN')}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                        className="text-charcoal-400 hover:text-red-600 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center text-[11px] sm:text-xs text-charcoal-600 pt-1">
              <Link to="/shop" className="hover:text-charcoal-900 underline">
                ← Continue Shopping
              </Link>
              <span className="hidden sm:inline">Pure concentrated attar oils packaged in luxury velvet wooden boxes.</span>
            </div>

          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-4 bg-cream-50 border border-beige-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-4 sm:space-y-6 shadow-sm">
            <h2 className="font-serif text-xl sm:text-2xl text-charcoal-900 font-normal border-b border-beige-200 pb-3">
              Order Summary
            </h2>

            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="space-y-1.5">
              <label className="text-[10px] sm:text-xs uppercase tracking-wider text-charcoal-600 font-medium flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-gold-600" /> Privilege Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. SHAHBAZI10"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="bg-white border border-beige-300 rounded-xl px-3 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-600 flex-1 min-w-0"
                />
                <button
                  type="submit"
                  className="bg-charcoal-800 text-cream-50 px-3.5 py-2 rounded-xl text-[11px] sm:text-xs uppercase tracking-wider font-medium hover:bg-gold-700 transition-colors flex-shrink-0"
                >
                  Apply
                </button>
              </div>
              {promoApplied && (
                <p className="text-[11px] text-green-700 font-medium flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> 10% Privilege discount applied!
                </p>
              )}
              {promoError && <p className="text-[11px] text-red-600 font-light">{promoError}</p>}
            </form>

            {/* Breakdown */}
            <div className="space-y-2.5 text-xs text-charcoal-600 border-t border-beige-200 pt-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-charcoal-900">₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-700 font-medium">
                  <span>Privilege Discount (10%)</span>
                  <span>-₹{discount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Express Shipping</span>
                <span className="text-gold-700 font-medium">
                  {remainingForFreeShipping === 0 ? 'Complimentary' : '₹250'}
                </span>
              </div>
            </div>

            <div className="border-t border-beige-200 pt-3 flex justify-between items-center text-charcoal-900">
              <span className="uppercase tracking-wider text-[11px] sm:text-xs font-semibold">Total Amount</span>
              <span className="font-serif text-2xl sm:text-3xl font-semibold">₹{finalTotal.toLocaleString('en-IN')}</span>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-charcoal-900 hover:bg-gold-700 text-cream-50 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium flex items-center justify-center space-x-2 transition-colors shadow-md"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 text-gold-500" />
            </button>

            <div className="text-[10px] text-center text-charcoal-500 font-light flex items-center justify-center gap-1 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
              <span>Encrypted Checkout • 100% Satisfaction</span>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
