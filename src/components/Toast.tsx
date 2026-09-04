import React, { useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Toast: React.FC = () => {
  const { toast, hideToast } = useShop();

  useEffect(() => {
    if (toast.isVisible) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast.isVisible, hideToast]);

  return (
    <AnimatePresence>
      {toast.isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 bg-charcoal-900 text-cream-50 px-5 py-3.5 rounded-2xl shadow-2xl border border-gold-600/40 flex items-center space-x-3.5 max-w-md"
        >
          {toast.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0" />
          ) : (
            <Info className="w-5 h-5 text-beige-300 flex-shrink-0" />
          )}

          <div className="flex-1 text-xs font-medium tracking-wide">
            {toast.message}
          </div>

          <button
            onClick={hideToast}
            className="text-charcoal-400 hover:text-cream-50 transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
