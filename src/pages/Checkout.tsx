import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop, ShippingDetails } from '../context/ShopContext';
import { ShieldCheck, CheckCircle2, CreditCard, Lock, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export const Checkout: React.FC = () => {
  const { cart, cartTotal, addOrder } = useShop();

  const [formData, setFormData] = useState<ShippingDetails>({
    name: 'Faiz Ahmed',
    email: 'faiz@example.com',
    address: '42 Sanctuary Boulevard, Suite 7A',
    city: 'Dubai',
    zip: '00000',
    country: 'United Arab Emirates'
  });

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'applepay' | 'cod'>('card');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('888');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const orderItems = cart.map((item) => ({
        id: item.product.id,
        name: item.product.name,
        size: item.selectedSize,
        quantity: item.quantity,
        price: item.unitPrice,
        image: item.product.images[0]
      }));

      const newOrder = addOrder({
        items: orderItems,
        subtotal: cartTotal,
        shippingAddress: formData
      });

      setIsSubmitting(false);
      setCompletedOrder(newOrder);
    }, 1200);
  };

  if (completedOrder) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16 text-center space-y-6 sm:space-y-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold-600/20 text-gold-600 flex items-center justify-center mx-auto"
        >
          <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
        </motion.div>

        <div className="space-y-2 sm:space-y-3">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold">
            Order Confirmed
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl text-charcoal-900 font-normal">
            Thank You for Your Privilege Order
          </h1>
          <p className="text-xs text-charcoal-600 font-light max-w-md mx-auto leading-relaxed">
            Your attar order <strong className="text-charcoal-900">{completedOrder.id}</strong> has been received and is being prepared in our quiet apothecary.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-cream-50 border border-beige-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-left space-y-3 sm:space-y-4 max-w-lg mx-auto text-xs">
          <div className="flex justify-between border-b border-beige-200 pb-2.5">
            <span className="text-charcoal-500 font-light">Order Number:</span>
            <span className="font-bold text-charcoal-900">{completedOrder.id}</span>
          </div>

          <div className="flex justify-between border-b border-beige-200 pb-2.5">
            <span className="text-charcoal-500 font-light">Destination Address:</span>
            <span className="font-medium text-charcoal-900 text-right truncate max-w-[200px]">{formData.address}, {formData.city}</span>
          </div>

          <div className="flex justify-between border-b border-beige-200 pb-2.5">
            <span className="text-charcoal-500 font-light">Total Amount Paid:</span>
            <span className="font-serif text-base sm:text-lg font-semibold text-charcoal-900">${completedOrder.total}</span>
          </div>

          <div className="space-y-1.5 pt-1">
            <span className="text-charcoal-500 font-light block">Items Included:</span>
            {completedOrder.items.map((item: any) => (
              <div key={item.id} className="flex justify-between font-medium text-charcoal-800">
                <span className="truncate pr-2">{item.name} ({item.size}) × {item.quantity}</span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/orders"
            className="w-full sm:w-auto bg-charcoal-900 hover:bg-gold-700 text-cream-50 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-xs font-medium uppercase tracking-widest transition-colors"
          >
            View Order History
          </Link>
          <Link
            to="/shop"
            className="w-full sm:w-auto border border-beige-300 text-charcoal-800 hover:bg-beige-200 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-xs font-medium uppercase tracking-widest transition-colors"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900">Your Bag is Empty</h2>
        <p className="text-xs text-charcoal-600">Please add items to your cart before proceeding to checkout.</p>
        <Link
          to="/shop"
          className="inline-block bg-charcoal-900 text-cream-50 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium"
        >
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6 sm:space-y-8">
      
      <div className="border-b border-beige-200 pb-4 flex items-center justify-between">
        <div>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold-700 font-medium">Encrypted Checkout</span>
          <h1 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-light mt-0.5">
            Complete Your Order
          </h1>
        </div>
        <Link to="/cart" className="text-[11px] sm:text-xs text-charcoal-600 hover:text-charcoal-900 flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Return to Cart</span>
        </Link>
      </div>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
        
        {/* Form Fields */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          
          {/* Step 1: Shipping Details */}
          <div className="bg-white border border-beige-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-4 sm:space-y-5 shadow-sm">
            <h2 className="font-serif text-lg sm:text-xl text-charcoal-900 font-medium flex items-center gap-2 border-b border-beige-200 pb-3">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gold-600 text-charcoal-950 text-[10px] sm:text-xs font-bold flex items-center justify-center">1</span>
              <span>Shipping & Delivery Address</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
              <div className="space-y-1 md:col-span-2">
                <label className="text-charcoal-600 font-medium uppercase tracking-wider text-[10px]">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-cream-50 border border-beige-300 rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5 text-charcoal-900 focus:outline-none focus:border-gold-600"
                />
              </div>

              <div className="space-y-1 md:col-span-2">
                <label className="text-charcoal-600 font-medium uppercase tracking-wider text-[10px]">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-cream-50 border border-beige-300 rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5 text-charcoal-900 focus:outline-none focus:border-gold-600"
                />
              </div>

              <div className="space-y-1 md:col-span-2">
                <label className="text-charcoal-600 font-medium uppercase tracking-wider text-[10px]">Street Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full bg-cream-50 border border-beige-300 rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5 text-charcoal-900 focus:outline-none focus:border-gold-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-charcoal-600 font-medium uppercase tracking-wider text-[10px]">City / Region</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full bg-cream-50 border border-beige-300 rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5 text-charcoal-900 focus:outline-none focus:border-gold-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-charcoal-600 font-medium uppercase tracking-wider text-[10px]">Country</label>
                <input
                  type="text"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full bg-cream-50 border border-beige-300 rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5 text-charcoal-900 focus:outline-none focus:border-gold-600"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Payment Options */}
          <div className="bg-white border border-beige-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-4 sm:space-y-5 shadow-sm">
            <h2 className="font-serif text-lg sm:text-xl text-charcoal-900 font-medium flex items-center gap-2 border-b border-beige-200 pb-3">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gold-600 text-charcoal-950 text-[10px] sm:text-xs font-bold flex items-center justify-center">2</span>
              <span>Payment Option</span>
            </h2>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border text-center text-[10px] sm:text-xs font-medium transition-all ${
                  paymentMethod === 'card' ? 'border-gold-600 bg-gold-500/10 text-charcoal-900' : 'border-beige-300 bg-cream-50'
                }`}
              >
                Credit Card
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('applepay')}
                className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border text-center text-[10px] sm:text-xs font-medium transition-all ${
                  paymentMethod === 'applepay' ? 'border-gold-600 bg-gold-500/10 text-charcoal-900' : 'border-beige-300 bg-cream-50'
                }`}
              >
                Apple / Google
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('cod')}
                className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border text-center text-[10px] sm:text-xs font-medium transition-all ${
                  paymentMethod === 'cod' ? 'border-gold-600 bg-gold-500/10 text-charcoal-900' : 'border-beige-300 bg-cream-50'
                }`}
              >
                Cash Delivery
              </button>
            </div>

            {paymentMethod === 'card' && (
              <div className="space-y-3 pt-1 text-xs">
                <div className="space-y-1">
                  <label className="text-charcoal-600 font-medium uppercase tracking-wider text-[10px]">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full bg-cream-50 border border-beige-300 rounded-xl px-3.5 py-2 text-charcoal-900 focus:outline-none focus:border-gold-600 font-mono text-xs"
                    />
                    <CreditCard className="w-4 h-4 text-charcoal-400 absolute right-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-charcoal-600 font-medium uppercase tracking-wider text-[10px]">Expiration</label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full bg-cream-50 border border-beige-300 rounded-xl px-3.5 py-2 text-charcoal-900 focus:outline-none focus:border-gold-600 text-center font-mono text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-charcoal-600 font-medium uppercase tracking-wider text-[10px]">CVC Code</label>
                    <input
                      type="text"
                      value={cardCvc}
                      onChange={(e) => setCardCvc(e.target.value)}
                      className="w-full bg-cream-50 border border-beige-300 rounded-xl px-3.5 py-2 text-charcoal-900 focus:outline-none focus:border-gold-600 text-center font-mono text-xs"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Order Summary Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-cream-50 border border-beige-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-4 sm:space-y-5 shadow-sm sticky top-24">
            <h2 className="font-serif text-xl sm:text-2xl text-charcoal-900 font-normal border-b border-beige-200 pb-3">
              Order Review
            </h2>

            <div className="space-y-3 max-h-52 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={`${item.product.id}-${item.selectedSize}`} className="flex justify-between items-center text-xs">
                  <div className="flex space-x-2.5 items-center truncate">
                    <img src={item.product.images[0]} alt="" className="w-10 h-12 object-cover rounded-lg border border-beige-200 flex-shrink-0" />
                    <div className="truncate">
                      <span className="font-medium text-charcoal-900 block truncate">{item.product.name}</span>
                      <span className="text-charcoal-500 font-light text-[11px]">{item.selectedSize} × {item.quantity}</span>
                    </div>
                  </div>
                  <span className="font-serif font-semibold text-charcoal-900 ml-2 flex-shrink-0">${(item.unitPrice * item.quantity).toFixed(0)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-beige-200 pt-3 space-y-1.5 text-xs text-charcoal-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(0)}</span>
              </div>
              <div className="flex justify-between text-gold-700">
                <span>Express Shipping</span>
                <span>Complimentary</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-beige-200 text-sm font-bold text-charcoal-900">
                <span>Total Due</span>
                <span className="font-serif text-xl sm:text-2xl font-semibold">${cartTotal.toFixed(0)}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-charcoal-900 hover:bg-gold-700 text-cream-50 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium flex items-center justify-center space-x-2 transition-colors shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Securing Your Order...</span>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5 text-gold-500" />
                  <span>Place Order • ${cartTotal.toFixed(0)}</span>
                </>
              )}
            </button>

            <div className="text-[10px] text-center text-charcoal-500 font-light flex items-center justify-center gap-1 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
              <span>256-bit SSL Secure Checkout</span>
            </div>
          </div>
        </div>

      </form>

    </div>
  );
};
