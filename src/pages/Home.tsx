import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Feather, Compass, Droplet } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductCardSkeleton } from '../components/SkeletonLoader';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <div className="space-y-12 sm:space-y-20 md:space-y-28 pb-12">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-cream-200">
        {/* Soft Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=2000"
            alt="Attar Perfume Oil Bottle Aesthetic"
            className="w-full h-full object-cover object-center opacity-15 filter grayscale hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream-100 via-cream-100/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-5 sm:space-y-8 py-12 sm:py-20">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-cream-50/80 backdrop-blur-md border border-gold-600/30 text-[10px] sm:text-xs text-charcoal-800 uppercase tracking-[0.18em] sm:tracking-[0.25em] font-medium"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-600" />
            <span>Artisan Botanical Perfume Oils</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="font-serif text-3xl sm:text-6xl md:text-7xl font-light text-charcoal-900 tracking-tight leading-[1.15] sm:leading-[1.1]"
          >
            The Essence of <br />
            <span className="italic font-normal text-gold-700 font-serif">Quiet Luxury</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
            className="max-w-2xl mx-auto text-xs sm:text-base text-charcoal-600 font-light leading-relaxed tracking-wide px-2"
          >
            Pure, non-alcoholic attars hand-distilled in small copper stills. Rare aged Assam oud, fresh Taif rose petals, and golden amber crafted for skin intimacy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
            className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Link
              to="/shop"
              className="w-full sm:w-auto bg-charcoal-900 hover:bg-gold-700 text-cream-50 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center space-x-2.5 group"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/categories"
              className="w-full sm:w-auto border border-charcoal-800 text-charcoal-900 hover:bg-beige-200 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium transition-colors text-center"
            >
              Olfactory Families
            </Link>
          </motion.div>

        </div>
      </section>

      {/* EDITORIAL CRAFT HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-50 border border-beige-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center shadow-sm">
          <div className="space-y-2.5 p-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-beige-100 flex items-center justify-center mx-auto text-gold-700">
              <Droplet className="w-5 h-5 sm:w-6 sm:h-6 stroke-1" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl text-charcoal-900 font-medium">100% Pure Oil Extract</h3>
            <p className="text-xs text-charcoal-600 font-light leading-relaxed">
              Zero alcohol, zero synthetic fillers. Concentrated perfume oil that blooms naturally with your body warmth.
            </p>
          </div>

          <div className="space-y-2.5 p-2 border-y md:border-y-0 md:border-x border-beige-200 py-4 md:py-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-beige-100 flex items-center justify-center mx-auto text-gold-700">
              <Feather className="w-5 h-5 sm:w-6 sm:h-6 stroke-1" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl text-charcoal-900 font-medium">Intimate Projection</h3>
            <p className="text-xs text-charcoal-600 font-light leading-relaxed">
              Designed for close contact and skin longevity. A signature aura that leaves a memorable, elegant trail.
            </p>
          </div>

          <div className="space-y-2.5 p-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-beige-100 flex items-center justify-center mx-auto text-gold-700">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 stroke-1" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl text-charcoal-900 font-medium">Artisanal Packaging</h3>
            <p className="text-xs text-charcoal-600 font-light leading-relaxed">
              Presented in velvet-lined hand-carved wood boxes with crystal glass dipsticks for traditional application.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
        <div className="flex flex-row justify-between items-end border-b border-beige-200 pb-4 sm:pb-6">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-700 font-medium">Curated Selection</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal-900 font-light mt-0.5">
              Signature Attars
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-[11px] sm:text-xs uppercase tracking-widest font-medium text-charcoal-800 hover:text-gold-700 flex items-center gap-1.5 transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Product Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {loading
            ? Array(4)
                .fill(0)
                .map((_, i) => <ProductCardSkeleton key={i} />)
            : featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </section>

      {/* CATEGORY PREVIEW */}
      <section className="bg-cream-200/80 py-12 sm:py-20 border-y border-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-700 font-medium">Olfactory Families</span>
            <h2 className="font-serif text-2xl sm:text-4xl text-charcoal-900 font-light">
              Explore By Scent Notes
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light">
              From deep resinous woods to dewy floral gardens, discover your personal scent identity.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6">
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.name}`}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/4] bg-charcoal-900 flex flex-col justify-end p-3.5 sm:p-6 border border-beige-200/50 shadow-sm"
              >
                {/* Background image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent"></div>

                <div className="relative z-10 space-y-0.5 text-cream-50">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gold-400 font-light">
                    {category.count} Attars
                  </span>
                  <h3 className="font-serif text-lg sm:text-2xl font-normal group-hover:text-gold-300 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-cream-200/80 font-light line-clamp-2 hidden sm:block">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* BRAND BANNER QUOTE */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-4 sm:space-y-6 py-4">
        <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-gold-600 mx-auto stroke-1" />
        <blockquote className="font-serif text-lg sm:text-2xl md:text-3xl text-charcoal-900 italic leading-relaxed font-light px-2">
          "Attar is not merely a fragrance; it is a quiet memory suspended in oil. It lives with you, warm and subtle, throughout the day."
        </blockquote>
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-charcoal-500 font-medium">
          Master Distiller • Jabazi Atelier
        </p>
      </section>

    </div>
  );
};
