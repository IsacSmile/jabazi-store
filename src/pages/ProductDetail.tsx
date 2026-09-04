import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, Product } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductDetailSkeleton } from '../components/SkeletonLoader';
import { useShop } from '../context/ShopContext';
import { Star, Heart, ShoppingBag, ShieldCheck, Feather, ChevronRight, Plus, Minus, Check } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, wishlist, toggleWishlist } = useShop();

  const [product, setProduct] = useState<Product | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('3ml');
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [added, setAdded] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const found = PRODUCTS.find((p) => p.id === id);
    if (found) {
      setProduct(found);
      setSelectedSize(found.sizes[0].name);
      setActiveImageIndex(0);
      setQuantity(1);
    }
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return <ProductDetailSkeleton />;
  }

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="font-serif text-2xl text-charcoal-900">Fragrance Not Found</h2>
        <p className="text-xs text-charcoal-600">The requested attar oil could not be located in our archive.</p>
        <Link
          to="/shop"
          className="inline-block bg-charcoal-900 text-cream-50 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const isWishlisted = wishlist.includes(product.id);
  const matchedSize = product.sizes.find((s) => s.name === selectedSize) || product.sizes[0];
  const totalPrice = matchedSize.price * quantity;

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="space-y-8 sm:space-y-12 pb-12 sm:pb-16 max-w-6xl mx-auto">
      
      {/* Breadcrumb Navigation */}
      <div className="px-3 sm:px-6 lg:px-8 pt-3 sm:pt-5">
        <div className="flex items-center space-x-1.5 text-[10px] sm:text-xs text-charcoal-500 font-light truncate">
          <Link to="/" className="hover:text-charcoal-900">Home</Link>
          <ChevronRight className="w-3 h-3 text-beige-300 flex-shrink-0" />
          <Link to="/shop" className="hover:text-charcoal-900">Shop</Link>
          <ChevronRight className="w-3 h-3 text-beige-300 flex-shrink-0" />
          <Link to={`/shop?category=${product.category}`} className="hover:text-charcoal-900">{product.category}</Link>
          <ChevronRight className="w-3 h-3 text-beige-300 flex-shrink-0" />
          <span className="text-charcoal-900 font-medium truncate">{product.name}</span>
        </div>
      </div>

      {/* PRODUCT GALLERY & DETAILS - Compact Premium Layout */}
      <section className="px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          
          {/* Left Column: Compact Image Showcase */}
          <div className="lg:col-span-5 space-y-3 max-w-md mx-auto lg:max-w-none w-full">
            <div className="relative aspect-[4/5] max-h-[380px] sm:max-h-[440px] rounded-2xl overflow-hidden bg-beige-100 border border-beige-200 shadow-sm mx-auto">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Wishlist Button Overlay */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-3 right-3 p-2 sm:p-2.5 rounded-full backdrop-blur-md transition-all shadow-sm ${
                  isWishlisted
                    ? 'bg-gold-600 text-charcoal-950 scale-110'
                    : 'bg-white/80 text-charcoal-700 hover:bg-white hover:text-gold-600'
                }`}
                title={isWishlisted ? 'Remove from saved' : 'Save fragrance'}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>

              <div className="absolute bottom-3 left-3 bg-charcoal-950/80 backdrop-blur-md text-cream-50 text-[10px] sm:text-xs px-3 py-1 rounded-full font-light tracking-wider">
                Origin: {product.origin}
              </div>
            </div>

            {/* Thumbnail Selectors */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 justify-center lg:justify-start">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 sm:w-16 aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx ? 'border-gold-600 scale-105' : 'border-beige-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Information & Compact Purchase Controls */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Header info */}
            <div className="space-y-2 border-b border-beige-200 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold-700 font-semibold">
                  {product.category} Attar
                </span>
                <div className="flex items-center space-x-1 text-xs text-charcoal-700">
                  <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-charcoal-400 text-[10px] sm:text-xs">({product.reviewsCount})</span>
                </div>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-normal tracking-wide">
                {product.name}
              </h1>

              <p className="text-xs sm:text-sm text-gold-700 font-medium tracking-wide">
                {product.subtitle}
              </p>

              <p className="text-xs text-charcoal-600 font-light leading-relaxed pt-1 max-w-xl">
                {product.description}
              </p>
            </div>

            {/* Size Selector */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="uppercase tracking-widest text-charcoal-500 font-medium text-[10px] sm:text-xs">Select Size:</span>
                <span className="text-gold-700 font-light italic text-[11px]">Pure Concentrated Oil</span>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-2.5 max-w-md">
                {product.sizes.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => setSelectedSize(s.name)}
                    className={`p-2.5 rounded-xl border text-center transition-all relative ${
                      selectedSize === s.name
                        ? 'border-gold-600 bg-gold-500/10 text-charcoal-900 shadow-sm'
                        : 'border-beige-300 bg-white text-charcoal-700 hover:border-beige-400'
                    }`}
                  >
                    {s.badge && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gold-600 text-charcoal-950 text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full whitespace-nowrap">
                        {s.badge}
                      </span>
                    )}
                    <div className="text-xs font-semibold mt-0.5">{s.name}</div>
                    <div className="text-[10px] text-charcoal-600 font-light">₹{s.price.toLocaleString('en-IN')}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Compact Price & Add to Cart Box */}
            <div className="bg-cream-50 p-4 sm:p-5 rounded-2xl border border-beige-200 space-y-4 max-w-md">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-charcoal-500 font-light block">Total Price:</span>
                  <span className="font-serif text-2xl font-semibold text-charcoal-900">₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center space-x-2 bg-white border border-beige-300 rounded-xl px-2.5 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-charcoal-600 hover:text-charcoal-900 p-0.5"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-bold w-5 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-charcoal-600 hover:text-charcoal-900 p-0.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full py-3 rounded-xl text-xs uppercase tracking-[0.18em] font-medium flex items-center justify-center space-x-2 transition-all shadow-sm ${
                  added
                    ? 'bg-gold-600 text-charcoal-950'
                    : 'bg-charcoal-900 hover:bg-gold-700 text-cream-50'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-gold-500" />
                    <span>Add to Bag • ₹{totalPrice.toLocaleString('en-IN')}</span>
                  </>
                )}
              </button>

              <div className="flex justify-center items-center gap-4 text-[10px] text-charcoal-500 font-light pt-0.5">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-600" /> Zero Alcohol
                </span>
                <span className="flex items-center gap-1">
                  <Feather className="w-3.5 h-3.5 text-gold-600" /> Velvet Box Included
                </span>
              </div>
            </div>

            {/* SCENT PYRAMID NOTES */}
            <div className="bg-white p-4 rounded-2xl border border-beige-200 space-y-3 max-w-md">
              <h3 className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-700 font-medium border-b border-beige-200 pb-1.5">
                Olfactory Note Structure
              </h3>

              <div className="space-y-2.5 text-xs">
                <div>
                  <span className="font-semibold uppercase tracking-wider text-[9px] block text-gold-700">Top Notes (Initial Radiance)</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {product.notes.top.map((note) => (
                      <span key={note} className="bg-cream-100 text-charcoal-800 text-[10px] px-2 py-0.5 rounded-md border border-beige-200">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-semibold uppercase tracking-wider text-[9px] block text-gold-700">Heart Notes (Character & Depth)</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {product.notes.heart.map((note) => (
                      <span key={note} className="bg-beige-100 text-charcoal-900 text-[10px] px-2 py-0.5 rounded-md border border-beige-200">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-semibold uppercase tracking-wider text-[9px] block text-gold-700">Base Notes (Skin Scent Drydown)</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {product.notes.base.map((note) => (
                      <span key={note} className="bg-charcoal-900 text-cream-100 text-[10px] px-2 py-0.5 rounded-md">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Application Guide */}
            <div className="border-t border-beige-200 pt-3 space-y-1 text-xs text-charcoal-600 font-light max-w-md">
              <h4 className="font-medium text-charcoal-900">How to Apply Attar Oil:</h4>
              <p className="text-[11px] leading-relaxed">
                Using the glass applicator, dab a drop onto your pulse points: wrists, behind earlobes, and base of throat. Allow your natural body heat to diffuse the oil slowly.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="px-3 sm:px-6 lg:px-8 pt-8 border-t border-beige-200 space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold-700 font-medium">Complements</span>
              <h2 className="font-serif text-xl sm:text-2xl text-charcoal-900 font-light">
                More From {product.category}
              </h2>
            </div>
            <Link to={`/shop?category=${product.category}`} className="text-[11px] uppercase tracking-widest text-gold-700 hover:underline">
              Explore All
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
