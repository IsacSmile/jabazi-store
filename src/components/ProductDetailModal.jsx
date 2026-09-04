import React, { useState } from "react";
import { X, Star, ShoppingBag, Zap, ShieldCheck, Droplets, Heart, Sparkles, Plus, Minus } from "lucide-react";

export default function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
  onBuyNow
}) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleBuyNow = () => {
    onBuyNow(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div
        className="relative bg-[#FDFBF7] border border-[#EBE5DC] rounded-lg max-w-4xl w-full overflow-hidden shadow-2xl animate-slide-up my-8 max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 border border-[#EBE5DC] text-[#191715] hover:bg-[#191715] hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close detail modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Column: Product Image */}
        <div className="md:w-1/2 bg-[#F6F2EC] relative flex items-center justify-center p-6 min-h-[320px] md:min-h-[480px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded max-h-[440px] shadow-md"
          />

          <div className="absolute top-6 left-6 flex flex-col gap-1.5">
            <span className="gold-tag shadow-sm">{product.categoryLabel}</span>
            {product.isPremium && (
              <span className="bg-[#191715] text-[#F7F1E5] text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full">
                Artisanal Reserve
              </span>
            )}
          </div>
        </div>

        {/* Right Column: Details & Purchasing */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Rating & Brand */}
            <div className="flex items-center justify-between text-xs text-[#999187] mb-2 font-sans">
              <span className="uppercase tracking-widest text-[#B88E4B] font-semibold">
                Jabazi Store
              </span>
              <div className="flex items-center gap-1 text-[#B88E4B]">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="font-bold text-[#191715]">{product.rating}</span>
                <span>({product.reviewsCount} Reviews)</span>
              </div>
            </div>

            {/* Product Title */}
            <h2 className="font-serif text-3xl md:text-4xl text-[#191715] font-normal mb-2">
              {product.name}
            </h2>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-sans font-bold text-2xl text-[#191715]">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="font-sans text-sm text-[#999187] line-through">
                  ${product.originalPrice}
                </span>
              )}
              <span className="text-xs text-[#5DB889] font-medium font-sans">
                In Stock • {product.volume}
              </span>
            </div>

            {/* Full Description */}
            <p className="font-sans text-xs sm:text-sm text-[#635E57] leading-relaxed mb-6">
              {product.fullDescription}
            </p>

            {/* Fragrance Notes Breakdown */}
            {product.notes && (
              <div className="bg-[#F6F2EC] p-4 rounded border border-[#EBE5DC] mb-6 space-y-2">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-[#191715] font-sans flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#B88E4B]" />
                  Fragrance Pyramid Notes
                </h4>

                <div className="grid grid-cols-1 gap-2 text-xs font-sans">
                  {product.notes.top && (
                    <div className="flex">
                      <span className="w-20 text-[#999187] font-medium shrink-0">Top Notes:</span>
                      <span className="text-[#191715]">{product.notes.top.join(", ")}</span>
                    </div>
                  )}
                  {product.notes.heart && (
                    <div className="flex">
                      <span className="w-20 text-[#999187] font-medium shrink-0">Heart Notes:</span>
                      <span className="text-[#191715]">{product.notes.heart.join(", ")}</span>
                    </div>
                  )}
                  {product.notes.base && (
                    <div className="flex">
                      <span className="w-20 text-[#999187] font-medium shrink-0">Base Notes:</span>
                      <span className="text-[#191715]">{product.notes.base.join(", ")}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#191715] font-sans">
                Quantity:
              </span>
              <div className="flex items-center border border-[#EBE5DC] rounded bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-[#F6F2EC] text-[#191715] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 font-sans font-semibold text-sm text-[#191715]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-[#F6F2EC] text-[#191715] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-[#EBE5DC]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleAddToCart}
                className={`btn-secondary py-3 text-xs w-full ${
                  added ? "bg-[#5DB889] text-white border-[#5DB889]" : ""
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{added ? "Added to Cart!" : "Add to Cart"}</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="btn-primary py-3 text-xs w-full bg-[#B88E4B] border-[#B88E4B] hover:bg-[#9E7535]"
              >
                <Zap className="w-4 h-4" />
                <span>Buy Now</span>
              </button>
            </div>

            {/* Guarantees */}
            <div className="flex items-center justify-between text-[11px] text-[#999187] font-sans pt-2">
              <span className="flex items-center gap-1">
                <Droplets className="w-3 h-3 text-[#B88E4B]" /> 100% Pure Oil
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#B88E4B]" /> Alcohol Free
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#B88E4B]" /> Global Shipping
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
