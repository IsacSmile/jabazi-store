import React, { useState } from 'react';
import { Star, MapPin, Sparkles, ChevronLeft, ChevronRight, Package, Droplet } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Testimonial {
  id: string;
  name: string;
  subtitle: string;
  degree: string;
  productName: string;
  location: string;
  rating: number;
  badge: string;
  avatar: string;
  quote: string;
  permitBadge: string;
  pillBadge: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Fatima Al-Zahra',
    subtitle: 'Assam Wild Oud Collector',
    degree: 'Royal Oud Sublime • 6ml',
    productName: 'ASSAM OUD AGED',
    location: 'Mumbai, India',
    rating: 5,
    badge: 'VERIFIED ~',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    quote: '"Shahbazi\'s Royal Oud Sublime is remarkably smooth with zero synthetic alcohol sting. It lasts over 16 hours on my skin and matures into a heavenly, resinous amber aura."',
    permitBadge: 'Verified Purchase',
    pillBadge: 'Fatima'
  },
  {
    id: '2',
    name: 'Tariq Siddiqui',
    subtitle: 'Vintage Sandalwood Artisan',
    degree: 'Sandal Amber Radiance • 12ml Tola',
    productName: 'MYSORE SANDALWOOD',
    location: 'Dubai, UAE',
    rating: 5,
    badge: 'VERIFIED ~',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    quote: '"As someone who has collected traditional attars for two decades, Shahbazi\'s copper-distilled Mysorean Sandalwood is absolute perfection. Deep, rich, and truly quiet luxury."',
    permitBadge: 'Master Connoisseur',
    pillBadge: 'Tariq'
  },
  {
    id: '3',
    name: 'Mariam Khan',
    subtitle: 'Mountain Flora Enthusiast',
    degree: 'Taif Rose Absolute • 6ml',
    productName: 'DAMASK TAIF ROSE',
    location: 'Hyderabad, India',
    rating: 5,
    badge: 'VERIFIED ~',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400',
    quote: '"Pure Taif rose at its absolute finest. Dewy, honeyed, and elegant. Unboxing the velvet hand-carved wooden box feels like receiving a royal heirloom."',
    permitBadge: 'Dawn Harvest Reserve',
    pillBadge: 'Mariam'
  },
  {
    id: '4',
    name: 'Bilal Ahmed',
    subtitle: 'Minimalist Scent Aficionado',
    degree: 'Musk Kashmir Supreme • 3ml',
    productName: 'BOTANICAL WHITE MUSK',
    location: 'London, UK',
    rating: 5,
    badge: 'VERIFIED ~',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    quote: '"Musk Kashmir Supreme is subtle yet incredibly comforting. People constantly ask what scent I am wearing. It leaves a delicate, unforgettable presence."',
    permitBadge: 'Verified Purchase',
    pillBadge: 'Bilal'
  },
  {
    id: '5',
    name: 'Aisha Rahman',
    subtitle: 'Night Blooms Specialist',
    degree: 'Jasmine Sambac Nectar • 6ml',
    productName: 'MADURAI SAMBAC',
    location: 'Delhi, India',
    rating: 5,
    badge: 'VERIFIED ~',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    quote: '"The jasmine note is night-blooming and intoxicatingly real. Zero synthetic undertones. Pure natural perfection distilled into every single drop."',
    permitBadge: 'Hand-Picked Buds',
    pillBadge: 'Aisha'
  },
  {
    id: '6',
    name: 'Zayn Qureshi',
    subtitle: 'Terracotta Mitti Connoisseur',
    degree: 'Vetiver Imperiale • 12ml Tola',
    productName: 'KHUS & MITTI ATTAR',
    location: 'Toronto, Canada',
    rating: 5,
    badge: 'VERIFIED ~',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    quote: '"The earthiness of the Mitti Attar combined with wild Khus root smells exactly like first monsoon rain pouring over warm sun-baked soil. Masterpiece formulation!"',
    permitBadge: 'Terracotta Distillation',
    pillBadge: 'Zayn'
  }
];

export const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = TESTIMONIALS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="max-w-4xl mx-auto px-3 sm:px-6 py-8 sm:py-14 space-y-6 sm:space-y-8">
      
      {/* Top Header Badge */}
      <div className="text-center space-y-2 sm:space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0E3B2E] text-cream-50 text-[9px] sm:text-xs uppercase tracking-[0.2em] font-semibold shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>VERIFIED PATRON SUCCESS STORIES</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-4xl text-charcoal-900 font-light tracking-tight leading-snug">
          Real Patrons. Proven Fragrance Pathways.
        </h2>

        <p className="text-xs sm:text-sm text-charcoal-600 font-light max-w-lg mx-auto leading-relaxed px-2">
          Hear directly from perfume oil connoisseurs enjoying pure artisan attars handcrafted in Kannauj & Assam.
        </p>
      </div>

      {/* Avatar Pill Selector Bar */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 max-w-2xl mx-auto px-1">
        {TESTIMONIALS.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-[#0E3B2E] text-white shadow-md ring-2 ring-[#0E3B2E]/40 scale-105'
                  : 'bg-white border border-beige-300 text-charcoal-700 hover:bg-cream-100'
              }`}
            >
              <img
                src={item.avatar}
                alt={item.name}
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border ${
                  isActive ? 'border-gold-400' : 'border-beige-300'
                }`}
              />
              <span className="text-[11px] sm:text-xs font-medium tracking-wide">{item.pillBadge}</span>
            </button>
          );
        })}
      </div>

      {/* Main Feedback Card */}
      <div className="relative max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonial.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-beige-200/90 rounded-3xl p-5 sm:p-8 shadow-lg relative overflow-hidden space-y-4"
          >
            {/* Decorative Huge Quote Mark */}
            <span className="absolute top-3 right-4 sm:top-5 sm:right-6 font-serif text-5xl sm:text-7xl text-[#F9E5E5] pointer-events-none select-none leading-none">
              ”
            </span>

            {/* Card Header: Avatar & Info */}
            <div className="flex items-start gap-3.5 sm:gap-5 pr-8">
              
              {/* Left Avatar with "VERIFIED ~" Badge Overlay */}
              <div className="relative flex-shrink-0">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-beige-300 shadow-sm"
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#B82932] text-white text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-sm whitespace-nowrap">
                  {activeTestimonial.badge}
                </div>
              </div>

              {/* Right Side Info */}
              <div className="space-y-1 min-w-0 flex-1">
                {/* Rating & Tag */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <div className="flex text-[#B82932]">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <span className="bg-[#FDF0F0] text-[#B82932] text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                    <Droplet className="w-2.5 h-2.5 fill-current" />
                    {activeTestimonial.productName}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-serif text-lg sm:text-2xl font-bold text-charcoal-900 leading-snug">
                  {activeTestimonial.name}
                </h3>

                {/* Sub-details with icons */}
                <div className="space-y-0.5 text-[11px] sm:text-xs text-charcoal-600 font-medium">
                  <div className="flex items-center gap-1.5 truncate">
                    <Package className="w-3.5 h-3.5 text-charcoal-400 flex-shrink-0" />
                    <span className="truncate">{activeTestimonial.subtitle}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-charcoal-800 font-semibold truncate">
                    <span className="text-[10px]">🧴</span>
                    <span className="truncate">{activeTestimonial.degree}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Testimonial Quote */}
            <div className="border-t border-beige-100 pt-3">
              <p className="font-serif italic text-xs sm:text-base text-charcoal-800 leading-relaxed font-light">
                {activeTestimonial.quote}
              </p>
            </div>

            {/* Card Footer Row */}
            <div className="flex justify-between items-center pt-1 border-t border-beige-100 text-[11px]">
              <div className="flex items-center gap-1 text-[#B82932] font-medium">
                <MapPin className="w-3.5 h-3.5 fill-current" />
                <span>{activeTestimonial.location}</span>
              </div>

              <div className="bg-cream-100 border border-beige-300 text-charcoal-900 text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                {activeTestimonial.permitBadge}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Carousel Bottom Counter & Arrows */}
        <div className="flex justify-between items-center pt-4 px-1">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-charcoal-600 font-medium">
              Connoisseur <strong className="font-bold text-charcoal-900">{activeIndex + 1}</strong> of {TESTIMONIALS.length}
            </span>
            <span className="bg-[#FDF0F0] text-[#B82932] text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">
              PAUSED
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-beige-300 text-charcoal-800 hover:bg-beige-100 flex items-center justify-center transition-all shadow-sm"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0E3B2E] text-white flex items-center justify-center hover:bg-[#08291F] transition-all shadow-sm"
              aria-label="Next story"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
