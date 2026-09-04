import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Feather, ArrowRight, Check } from 'lucide-react';

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
    <footer className="bg-charcoal-950 text-cream-100 pt-16 pb-12 border-t border-charcoal-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-charcoal-800/80">
          
          {/* Brand Philosophy */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center space-x-2 text-gold-500">
              <Feather className="w-5 h-5 stroke-1" />
              <span className="font-serif text-2xl tracking-[0.2em] uppercase font-light text-cream-50">
                SHAHBAZI STORE
              </span>
            </div>
            <p className="text-xs text-charcoal-300 font-light leading-relaxed max-w-md">
              Shahbazi Store is an independent artisan perfume house dedicated to the preservation of traditional attar distillation. Pure, zero-alcohol concentrated oils extracted from wild agarwood, Taif roses, and sacred botanicals.
            </p>
            <div className="text-[11px] text-gold-500/80 font-light uppercase tracking-widest pt-2">
              Alcohol-Free • 100% Pure Oil Extract • Ethical Sourcing
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-medium text-gold-500">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-charcoal-300 font-light">
              <li>
                <Link to="/" className="hover:text-cream-50 transition-colors">Home Experience</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-cream-50 transition-colors">Complete Attar Collection</Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-cream-50 transition-colors">Olfactory Families</Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-cream-50 transition-colors">Order History & Tracking</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-cream-50 transition-colors">Your Bag</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-medium text-gold-500">
              The Shahbazi Gazette
            </h4>
            <p className="text-xs text-charcoal-300 font-light leading-relaxed">
              Subscribe to receive private invitations to rare vintage batch drops, olfactory notes, and private collection access.
            </p>

            {subscribed ? (
              <div className="bg-charcoal-900 border border-gold-600/40 rounded-xl p-3.5 flex items-center space-x-2 text-gold-500 text-xs">
                <Check className="w-4 h-4" />
                <span>You are subscribed to private batch releases.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-charcoal-900 border border-charcoal-800 rounded-xl px-4 py-2.5 text-xs text-cream-50 placeholder:text-charcoal-500 focus:outline-none focus:border-gold-600 flex-1 font-light"
                />
                <button
                  type="submit"
                  className="bg-gold-600 hover:bg-gold-500 text-charcoal-950 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-charcoal-400 font-light gap-4">
          <p>© {new Date().getFullYear()} Shahbazi Store. All rights reserved. Quiet luxury attars.</p>

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
            <span className="hover:text-cream-50 cursor-pointer">Privacy Protocol</span>
            <span className="hover:text-cream-50 cursor-pointer">Terms of Service</span>
            <span className="hover:text-cream-50 cursor-pointer">Distillation Process</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
