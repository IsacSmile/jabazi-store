import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin, Sparkles, Clock, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-charcoal-950 text-cream-100 pt-16 sm:pt-20 pb-12 border-t border-charcoal-800/80 mt-20 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gold-600/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Luxury Brand Header */}
        <div className="pb-12 border-b border-charcoal-800/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-gold-500 mb-1">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gold-500">
                Independent Perfume House
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cream-50 font-light tracking-[0.15em] uppercase">
              SHAHBAZI STORE
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 text-[10px] sm:text-xs uppercase tracking-widest text-charcoal-300 font-light">
            <span className="inline-flex items-center gap-1.5 bg-charcoal-900/90 border border-charcoal-800 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
              100% Pure Attar Oil
            </span>
            <span className="inline-flex items-center gap-1.5 bg-charcoal-900/90 border border-charcoal-800 px-3 py-1.5 rounded-full">
              Alcohol-Free Formulations
            </span>
          </div>
        </div>

        {/* 4-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 py-12 border-b border-charcoal-800/80">
          
          {/* Column 1: STORE LOCATION (Rewritten as requested) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-500 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
              <span>Store Location</span>
            </h4>
            <div className="bg-charcoal-900/60 border border-charcoal-800/90 rounded-2xl p-4 space-y-2.5">
              <div>
                <h5 className="font-serif text-sm text-cream-50 font-normal">Shahbazi Store Flagship</h5>
                <p className="text-xs text-charcoal-300 font-light mt-0.5 leading-snug">
                  Venus More, Near Jama Masjid
                </p>
                <p className="text-xs text-charcoal-300 font-light leading-snug">
                  Siliguri, West Bengal
                </p>
              </div>

              <div className="pt-2 border-t border-charcoal-800/80 flex items-center gap-2 text-[11px] text-gold-400 font-light">
                <Clock className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                <span>Open Daily: 10:30 AM – 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: HERITAGE & DISTILLATION */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-500">
              Preservation & Heritage
            </h4>
            <p className="text-xs text-charcoal-300 font-light leading-relaxed">
              Crafted using traditional hydro-distillation in copper stills. Every bottle contains pure, undiluted botanical oils designed to evolve intimately on skin with warm, enduring longevity.
            </p>
            <div className="text-[10px] uppercase tracking-widest text-gold-500/80 font-medium">
              Kannauj • Assam • Taif • Mysore
            </div>
          </div>

          {/* Column 3: NAVIGATION */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-500">
              Olfactory Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-charcoal-300 font-light">
              <li>
                <Link to="/" className="hover:text-cream-50 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-cream-50 transition-colors">Attar Collection</Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-cream-50 transition-colors">Olfactory Families</Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-cream-50 transition-colors">Order Tracking</Link>
              </li>
              <li>
                <Link to="/shop?filter=saved" className="hover:text-cream-50 transition-colors">Saved Wishlist</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-cream-50 transition-colors">Shopping Bag</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: PRIVATE GAZETTE */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-500">
              The Shahbazi Gazette
            </h4>
            <p className="text-xs text-charcoal-300 font-light leading-relaxed">
              Receive private invitations for aged reserve agarwood harvests and limited vintage batch releases.
            </p>

            {subscribed ? (
              <div className="bg-charcoal-900 border border-gold-600/40 rounded-xl p-3 flex items-center space-x-2 text-gold-400 text-xs">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>Subscribed to private releases.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-charcoal-900 border border-charcoal-800 rounded-xl px-3 py-2 text-xs text-cream-50 placeholder:text-charcoal-500 focus:outline-none focus:border-gold-600 flex-1 font-light"
                />
                <button
                  type="submit"
                  className="bg-gold-600 hover:bg-gold-500 text-charcoal-950 px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center flex-shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright, Attribution & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-charcoal-400 font-light gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Shahbazi Store. All rights reserved.</p>

          {/* Developer Attribution */}
          <p className="text-[11px] text-charcoal-400 font-light">
            Engineered by{' '}
            <a
              href="https://www.instagram.com/faiz_imam__/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-500 hover:text-gold-400 font-medium underline underline-offset-4 decoration-gold-600/40 hover:decoration-gold-400 transition-colors"
            >
              Faiz.I
            </a>
          </p>

          <div className="flex space-x-6 text-[11px]">
            <span className="hover:text-cream-50 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-cream-50 cursor-pointer">Terms of Service</span>
            <span className="hover:text-cream-50 cursor-pointer">Distillation Standard</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
