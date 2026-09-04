import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/products';
import { ArrowRight, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export const Categories: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-700 font-medium">Olfactory Families</span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-light">
          Attar Fragrance Families
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-600 font-light max-w-xl mx-auto leading-relaxed">
          Each olfactory family represents a distinct distillation heritage—from smoky resinous ouds to delicate morning blooms.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group bg-white border border-beige-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Header */}
            <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-950">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end text-cream-50">
                <h2 className="font-serif text-2xl font-normal text-white">{cat.name}</h2>
                <span className="bg-gold-600 text-charcoal-950 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                  {cat.count} Attars
                </span>
              </div>
            </div>

            {/* Description & Note Pills */}
            <div className="p-4 sm:p-6 space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] uppercase tracking-wider text-gold-700 font-medium block">
                    Signature Olfactory Notes:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cat.keyNotes.map((note) => (
                      <span
                        key={note}
                        className="bg-cream-100 text-charcoal-800 text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full border border-beige-200 font-light"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-beige-200">
                <Link
                  to={`/shop?category=${cat.name}`}
                  className="w-full bg-cream-50 hover:bg-charcoal-900 hover:text-cream-50 text-charcoal-900 border border-beige-300 py-2.5 sm:py-3 rounded-xl text-xs uppercase tracking-wider font-medium flex items-center justify-center space-x-2 transition-all"
                >
                  <span>Explore {cat.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </motion.div>
        ))}
      </div>

      {/* Guide Footer */}
      <div className="bg-cream-50 border border-beige-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center max-w-3xl mx-auto space-y-3">
        <Compass className="w-6 h-6 text-gold-600 mx-auto stroke-1" />
        <h3 className="font-serif text-xl sm:text-2xl text-charcoal-900">Unsure Which Family Suits You?</h3>
        <p className="text-xs text-charcoal-600 font-light max-w-lg mx-auto">
          Our master distillers recommend starting with Woody or Floral notes for classic daily wear, or Oriental for rich evening projection.
        </p>
        <div className="pt-2">
          <Link
            to="/shop"
            className="inline-block bg-charcoal-900 text-cream-50 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-gold-700 transition-colors"
          >
            View Complete Treasury
          </Link>
        </div>
      </div>

    </div>
  );
};
