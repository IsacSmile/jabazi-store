import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Star, Check } from 'lucide-react';
import { Product } from '../data/products';
import { useShop } from '../context/ShopContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, wishlist, toggleWishlist } = useShop();
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0].name);
  const isWishlisted = wishlist.includes(product.id);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const matchedSizeObj = product.sizes.find((s) => s.name === selectedSize) || product.sizes[0];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedSize, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group bg-white/70 hover:bg-white border border-beige-200/80 hover:border-gold-500/40 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <div>
        {/* Product Image & Badges */}
        <div className="relative aspect-[4/5] rounded-lg sm:rounded-xl overflow-hidden bg-beige-100 mb-2.5 sm:mb-4 cursor-pointer">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover img-zoom"
              loading="lazy"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 z-10">
            <span className="bg-charcoal-900/90 backdrop-blur-sm text-cream-50 text-[8px] sm:text-[10px] uppercase tracking-wider px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-medium">
              {product.category}
            </span>
            {product.isBestSeller && (
              <span className="bg-gold-600/90 backdrop-blur-sm text-charcoal-950 text-[8px] sm:text-[10px] uppercase tracking-wider px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-semibold hidden sm:inline-block">
                Best Seller
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className={`absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 rounded-full backdrop-blur-md transition-all duration-200 ${
              isWishlisted
                ? 'bg-gold-600 text-charcoal-950 scale-110'
                : 'bg-white/80 text-charcoal-700 hover:bg-white hover:text-gold-600'
            }`}
            title={isWishlisted ? 'Remove from saved' : 'Save to favorites'}
          >
            <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Info */}
        <div className="space-y-1 sm:space-y-2">
          <div className="flex items-center gap-1 text-[10px] sm:text-xs text-charcoal-500">
            <div className="flex text-gold-600">
              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
            </div>
            <span className="font-medium text-charcoal-800">{product.rating}</span>
            <span className="hidden sm:inline">({product.reviewsCount})</span>
          </div>

          <Link to={`/product/${product.id}`} className="block group-hover:text-gold-700 transition-colors">
            <h3 className="font-serif text-sm sm:text-lg md:text-xl text-charcoal-900 font-medium tracking-wide line-clamp-1 leading-snug">
              {product.name}
            </h3>
          </Link>

          <p className="text-[10px] sm:text-xs text-charcoal-600 font-light line-clamp-1 hidden sm:block">
            {product.subtitle}
          </p>

          {/* Fragrance Notes Pills */}
          <div className="flex flex-wrap gap-1 pt-0.5">
            {product.notes.top.slice(0, 2).map((note) => (
              <span
                key={note}
                className="bg-beige-100 text-charcoal-700 text-[8px] sm:text-[10px] px-1.5 py-0.5 rounded-full font-light border border-beige-200 line-clamp-1"
              >
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer controls: Size options & Price */}
      <div className="pt-3 sm:pt-5 mt-2.5 sm:mt-4 border-t border-beige-200/60 space-y-2 sm:space-y-3">
        {/* Size Picker */}
        <div className="flex items-center justify-between gap-1">
          <span className="text-[9px] sm:text-[11px] uppercase tracking-wider text-charcoal-500 font-medium hidden sm:inline">
            Size:
          </span>
          <div className="flex gap-1 w-full sm:w-auto justify-between sm:justify-start">
            {product.sizes.map((s) => (
              <button
                key={s.name}
                type="button"
                onClick={() => setSelectedSize(s.name)}
                className={`text-[9px] sm:text-[11px] px-1.5 py-0.5 sm:px-2 rounded-md font-medium transition-all ${
                  selectedSize === s.name
                    ? 'bg-charcoal-900 text-cream-50'
                    : 'bg-beige-100 text-charcoal-700 hover:bg-beige-200'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        {/* Price & Add button */}
        <div className="flex items-center justify-between pt-0.5">
          <div>
            <span className="font-serif text-sm sm:text-lg font-normal text-charcoal-900">
              ₹{matchedSizeObj.price.toLocaleString('en-IN')}
            </span>
          </div>

          <button
            onClick={handleQuickAdd}
            className={`px-2 py-1 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-medium uppercase tracking-wider flex items-center space-x-1 transition-all duration-300 ${
              addedAnimation
                ? 'bg-gold-600 text-charcoal-950'
                : 'bg-charcoal-900 hover:bg-charcoal-800 text-cream-50'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden sm:inline">Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-500" />
                <span>+ Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
