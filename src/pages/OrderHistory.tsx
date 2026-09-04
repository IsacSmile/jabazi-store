import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { Package, Clock, CheckCircle2, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export const OrderHistory: React.FC = () => {
  const { orders, addToCart } = useShop();

  const handleReorder = (item: any) => {
    const dummyProduct = {
      id: item.id,
      name: item.name,
      subtitle: 'Re-ordered scent',
      category: 'Floral' as const,
      price: item.price,
      rating: 5,
      reviewsCount: 1,
      description: '',
      notes: { top: [], heart: [], base: [] },
      intensity: 'Moderate' as const,
      longevity: '12 hours',
      origin: 'Jabazi Vault',
      images: [item.image],
      sizes: [{ name: item.size, price: item.price }]
    };
    addToCart(dummyProduct as any, item.size, item.quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6 sm:space-y-10">
      
      {/* Page Header */}
      <div className="border-b border-beige-200 pb-4 sm:pb-6">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-700 font-medium">Privilege Vault</span>
        <h1 className="font-serif text-2xl sm:text-4xl text-charcoal-900 font-light mt-0.5">
          Your Order History ({orders.length})
        </h1>
        <p className="text-xs text-charcoal-600 font-light mt-1">
          Review your past artisan attar acquisitions and reorder signature fragrances.
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="bg-cream-50 border border-beige-200 rounded-2xl sm:rounded-3xl p-10 sm:p-16 text-center space-y-3 max-w-md mx-auto">
          <Package className="w-10 h-10 sm:w-12 sm:h-12 text-charcoal-400 mx-auto stroke-1" />
          <h2 className="font-serif text-xl sm:text-2xl text-charcoal-900">No Past Orders</h2>
          <p className="text-xs text-charcoal-600 font-light">
            You haven't placed any orders yet. Discover our collection of pure attar oils.
          </p>
          <div className="pt-2">
            <Link
              to="/shop"
              className="inline-block bg-charcoal-900 text-cream-50 px-6 py-3 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-gold-700 transition-colors"
            >
              Explore Attars
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4 sm:space-y-6">
          {orders.map((order, idx) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white border border-beige-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Order Card Header */}
              <div className="bg-cream-50 px-4 py-3 sm:px-6 sm:py-4 border-b border-beige-200 flex flex-wrap justify-between items-center gap-2 text-xs">
                <div className="flex items-center space-x-3">
                  <div>
                    <span className="text-charcoal-500 font-light block text-[9px] uppercase tracking-wider">Order ID</span>
                    <span className="font-mono font-bold text-charcoal-900 text-xs sm:text-sm">{order.id}</span>
                  </div>
                  <div className="h-5 w-px bg-beige-300"></div>
                  <div>
                    <span className="text-charcoal-500 font-light block text-[9px] uppercase tracking-wider">Date</span>
                    <span className="font-medium text-charcoal-800 text-[11px] sm:text-xs">{order.date}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {/* Status Badge */}
                  <span
                    className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1.5 ${
                      order.status === 'Delivered'
                        ? 'bg-green-100 text-green-800 border border-green-200'
                        : 'bg-gold-500/15 text-gold-700 border border-gold-600/30'
                    }`}
                  >
                    {order.status === 'Delivered' ? (
                      <CheckCircle2 className="w-3 h-3" />
                    ) : (
                      <Clock className="w-3 h-3 animate-spin" />
                    )}
                    <span>{order.status}</span>
                  </span>

                  <span className="font-serif text-lg sm:text-xl font-bold text-charcoal-900">
                    ${order.total}
                  </span>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-4 sm:p-6 divide-y divide-beige-100">
                {order.items.map((item) => (
                  <div key={item.id} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-3">
                    <div className="flex items-center space-x-3 min-w-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-18 sm:w-16 sm:h-20 object-cover rounded-lg sm:rounded-xl bg-beige-100 border border-beige-200 flex-shrink-0"
                      />
                      <div className="space-y-0.5 min-w-0">
                        <Link to={`/product/${item.id}`} className="font-serif text-base sm:text-lg font-medium text-charcoal-900 hover:text-gold-700 truncate block">
                          {item.name}
                        </Link>
                        <div className="text-[10px] sm:text-xs text-charcoal-500 font-light truncate">
                          Size: <strong className="font-medium text-charcoal-800">{item.size}</strong> • Qty: {item.quantity}
                        </div>
                        <div className="text-[11px] sm:text-xs font-semibold text-charcoal-800">
                          ${item.price} per unit
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleReorder(item)}
                      className="bg-beige-100 hover:bg-gold-600 hover:text-charcoal-950 text-charcoal-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[10px] sm:text-xs font-medium uppercase tracking-wider transition-colors flex items-center gap-1 flex-shrink-0"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Reorder</span>
                    </button>
                  </div>
                ))}
              </div>

              {/* Address footer */}
              <div className="bg-cream-100/50 px-4 py-2.5 sm:px-6 sm:py-3 border-t border-beige-200 text-[10px] sm:text-[11px] text-charcoal-500 font-light flex justify-between items-center">
                <span className="truncate pr-2">Ship to: {order.shippingAddress.name}, {order.shippingAddress.city}</span>
                <span className="text-gold-700 font-medium flex-shrink-0">Express Delivery</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

    </div>
  );
};
