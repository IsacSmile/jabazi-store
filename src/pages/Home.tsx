import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Feather, Droplet } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductCardSkeleton } from '../components/SkeletonLoader';
import { TestimonialSection } from '../components/TestimonialSection';
import { motion, AnimatePresence } from 'framer-motion';

const ATTAR_SLIDES = [
  {
    id: 1,
    title: 'Royal Oud Sublime',
    note: 'Assam Agarwood',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=1000',
    thumb: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=300',
    badge: '2026 Aged Reserve'
  },
  {
    id: 2,
    title: 'Sandal Amber Radiance',
    note: 'Mysore Sandalwood',
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=1000',
    thumb: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=300',
    badge: 'Copper Still Hydro'
  },
  {
    id: 3,
    title: 'Taif Rose Absolute',
    note: 'Damask Petal Harvest',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=1000',
    thumb: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=300',
    badge: 'Dawn Harvest'
  },
  {
    id: 4,
    title: 'Musk Kashmir Supreme',
    note: 'Botanical White Musk',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000',
    thumb: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=300',
    badge: 'Pure Oil Extract'
  }
];

export const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ATTAR_SLIDES.length);
    }, 2500);
    return () => clearInterval(slideTimer);
  }, []);

  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <div className="space-y-12 sm:space-y-20 md:space-y-28 pb-12">
      
      {/* HERO SECTION - Split 2-Column Quiet Luxury Redesign */}
      <section className="relative overflow-hidden bg-[#FBF9F5] border-b border-beige-200/80 py-10 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* LEFT SIDE: Premium Text Content */}
            <div className="space-y-5 sm:space-y-7 flex flex-col justify-center text-left max-w-xl lg:max-w-none mx-auto lg:mx-0">
              
              {/* Refined Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-cream-50 border border-gold-600/30 text-[8.5px] sm:text-[10px] text-gold-700 uppercase tracking-[0.18em] sm:tracking-[0.25em] font-semibold max-w-full shadow-sm"
              >
                <Sparkles className="w-3 h-3 text-gold-600 stroke-[1.5] flex-shrink-0" />
                <span className="truncate">ARTISAN BOTANICAL PERFUME OILS</span>
              </motion.div>

              {/* Large Premium Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal-900 font-light tracking-tight leading-[1.12]"
              >
                The Essence of <br />
                <span className="italic font-normal text-gold-700 font-serif">Quiet Luxury</span>
              </motion.h1>

              {/* Supporting Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed tracking-wide max-w-lg"
              >
                Pure, alcohol-free concentrated attars hand-distilled in traditional copper stills. Formulated with rare aged Assam agarwood, fresh Taif roses, and Mysore sandalwood designed for intimate skin longevity.
              </motion.p>

              {/* Soft Offer Line - Responsive & Wrapping for Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 bg-cream-100/80 border border-beige-300/80 px-3 py-2 sm:px-3.5 sm:py-2 rounded-xl text-[10px] sm:text-xs text-charcoal-800 font-medium max-w-full leading-snug"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-600 animate-pulse flex-shrink-0"></span>
                <span>Complimentary 1ml sample with every order • Free shipping above ₹999</span>
              </motion.div>

              {/* Two CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4"
              >
                <Link
                  to="/shop"
                  className="bg-charcoal-900 hover:bg-gold-700 text-cream-50 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group text-center"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-500 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/categories"
                  className="border border-beige-300 text-charcoal-800 hover:bg-cream-100 hover:border-charcoal-400 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-medium transition-all duration-300 text-center"
                >
                  Olfactory Families
                </Link>
              </motion.div>

            </div>

            {/* RIGHT SIDE: Elegant 3-Image Overlapping Cascade Composition */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-md lg:max-w-none mx-auto w-full pt-4 sm:pt-6 pb-6 sm:pb-8 px-2 sm:px-4"
            >
              <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[500px] flex items-center justify-center">
                
                {/* 1. TOP-LEFT OVERLAPPING CARD (Attar Image 2 - Sandalwood) */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: -15 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 left-0 z-10 w-[52%] sm:w-[50%] h-[200px] sm:h-[260px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-beige-300/90 bg-white group"
                >
                  <img
                    src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=800"
                    alt="Mysore Sandalwood Attar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-cream-50">
                    <span className="text-[8.5px] uppercase tracking-wider text-gold-400 font-semibold block">01 • Hydro-Distilled</span>
                    <h5 className="font-serif text-xs sm:text-sm font-normal truncate">Mysore Sandalwood</h5>
                  </div>
                </motion.div>

                {/* 2. MAIN CENTER HERO CARD (Auto-cycling Attar Image) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute z-20 w-[78%] sm:w-[76%] h-[290px] sm:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-gold-600/30 bg-cream-100 group"
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={ATTAR_SLIDES[currentSlide].id}
                      src={ATTAR_SLIDES[currentSlide].image}
                      alt={ATTAR_SLIDES[currentSlide].title}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      className="w-full h-full object-cover object-center"
                    />
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-charcoal-950/15 to-transparent pointer-events-none"></div>

                  {/* Top Right Vintage Badge */}
                  <div className="absolute top-3.5 right-3.5 bg-charcoal-900/90 backdrop-blur-md text-cream-50 text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.2em] font-medium px-3 py-1 rounded-full shadow-lg border border-gold-600/40">
                    {ATTAR_SLIDES[currentSlide].badge}
                  </div>

                  {/* Slide Indicators */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    {ATTAR_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentSlide ? 'w-4 bg-gold-400' : 'w-1.5 bg-white/40'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Bottom Overlay Label */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-cream-50 flex justify-between items-end backdrop-blur-md bg-charcoal-950/50 p-3 sm:p-3.5 rounded-2xl border border-white/10">
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-gold-400 font-medium">
                        Artisan Attar • {currentSlide + 1}/{ATTAR_SLIDES.length}
                      </p>
                      <h4 className="font-serif text-sm sm:text-lg font-normal text-white">
                        {ATTAR_SLIDES[currentSlide].title}
                      </h4>
                    </div>
                    <span className="text-[11px] font-serif italic text-cream-200">
                      {ATTAR_SLIDES[currentSlide].note}
                    </span>
                  </div>
                </motion.div>

                {/* 3. BOTTOM-RIGHT OVERLAPPING CARD (Attar Image 3 - Taif Rose) */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 right-0 z-30 w-[55%] sm:w-[52%] h-[180px] sm:h-[230px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-beige-300 bg-white group"
                >
                  <img
                    src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800"
                    alt="Taif Rose Botanical Attar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-cream-50 flex items-center justify-between">
                    <div>
                      <span className="text-[8.5px] uppercase tracking-wider text-gold-400 font-semibold block">03 • Pure Extract</span>
                      <h5 className="font-serif text-xs sm:text-sm font-normal truncate">Taif Rose Absolute</h5>
                    </div>
                    <span className="text-[9px] bg-gold-600/90 text-charcoal-950 font-semibold px-2 py-0.5 rounded-md uppercase tracking-wider">
                      100% Oil
                    </span>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* EDITORIAL CRAFT HIGHLIGHT - Quiet Luxury Redesign */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold">
            Distillation Heritage
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal-900 font-light">
            The Anatomy of Pure Attar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-cream-50/90 border border-beige-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4 hover:border-gold-600/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-full bg-gold-600/10 flex items-center justify-center text-gold-700 group-hover:bg-gold-600 group-hover:text-charcoal-950 transition-colors duration-300">
                <Droplet className="w-5 h-5 stroke-[1.5]" />
              </div>
              <span className="font-serif text-2xl text-beige-400 group-hover:text-gold-600/60 font-light transition-colors">
                01
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-xl text-charcoal-900 font-normal">
                100% Pure Oil Extract
              </h3>
              <p className="text-xs text-charcoal-500 font-light leading-relaxed">
                Zero alcohol, zero synthetic fillers. Concentrated perfume oil that blooms naturally with your body warmth.
              </p>
            </div>

            <div className="pt-2 border-t border-beige-200/60 flex items-center text-[10px] uppercase tracking-widest text-gold-700 font-medium">
              <span>Pure Distillation</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-cream-50/90 border border-beige-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4 hover:border-gold-600/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-full bg-gold-600/10 flex items-center justify-center text-gold-700 group-hover:bg-gold-600 group-hover:text-charcoal-950 transition-colors duration-300">
                <Feather className="w-5 h-5 stroke-[1.5]" />
              </div>
              <span className="font-serif text-2xl text-beige-400 group-hover:text-gold-600/60 font-light transition-colors">
                02
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-xl text-charcoal-900 font-normal">
                Intimate Projection
              </h3>
              <p className="text-xs text-charcoal-500 font-light leading-relaxed">
                Designed for close contact and skin longevity. A signature aura that leaves a memorable, elegant trail.
              </p>
            </div>

            <div className="pt-2 border-t border-beige-200/60 flex items-center text-[10px] uppercase tracking-widest text-gold-700 font-medium">
              <span>Personal Scent Aura</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-cream-50/90 border border-beige-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4 hover:border-gold-600/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-full bg-gold-600/10 flex items-center justify-center text-gold-700 group-hover:bg-gold-600 group-hover:text-charcoal-950 transition-colors duration-300">
                <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
              </div>
              <span className="font-serif text-2xl text-beige-400 group-hover:text-gold-600/60 font-light transition-colors">
                03
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-xl text-charcoal-900 font-normal">
                Artisanal Packaging
              </h3>
              <p className="text-xs text-charcoal-500 font-light leading-relaxed">
                Presented in velvet-lined hand-carved wood boxes with crystal glass dipsticks for traditional application.
              </p>
            </div>

            <div className="pt-2 border-t border-beige-200/60 flex items-center text-[10px] uppercase tracking-widest text-gold-700 font-medium">
              <span>Hand-Carved Sanctuary</span>
            </div>
          </motion.div>

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

      {/* VERIFIED PATRON TESTIMONIALS */}
      <TestimonialSection />

    </div>
  );
};
