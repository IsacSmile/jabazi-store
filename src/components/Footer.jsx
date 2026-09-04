import React from "react";
import { Sparkles, Heart } from "lucide-react";

export default function Footer({ onNavClick }) {
  return (
    <footer className="bg-[#191715] text-[#F7F1E5] pt-16 pb-12 font-sans border-t border-[#2A2622]">
      <div className="container">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2A2622]">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavClick("home")}>
              <div className="w-8 h-8 rounded-full bg-[#B88E4B] text-white flex items-center justify-center font-serif text-base font-bold">
                J
              </div>
              <span className="font-serif text-2xl font-normal tracking-[0.15em] text-white">
                JABAZI STORE
              </span>
            </div>

            <p className="text-xs text-[#999187] leading-relaxed max-w-sm">
              Jabazi Store is a luxury house of artisanal, concentrated perfume oils and pure attars. Hand-poured with non-alcoholic ingredients for timeless elegance.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#B88E4B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="tracking-widest uppercase text-[10px] font-semibold">100% Pure Alcohol-Free Attars</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#B88E4B] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#999187]">
              <li>
                <button onClick={() => onNavClick("home")} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick("shop")} className="hover:text-white transition-colors">
                  Shop All Attars
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick("categories")} className="hover:text-white transition-colors">
                  Fragrance Categories
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick("orders")} className="hover:text-white transition-colors">
                  Order History & Tracking
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care / Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#B88E4B] mb-4">
              Client Service
            </h4>
            <div className="space-y-2 text-xs text-[#999187]">
              <p>Email: <span className="text-white font-medium">concierge@jabazistore.com</span></p>
              <p>Phone: <span className="text-white font-medium">+1 (800) JABAZI-ATTAR</span></p>
              <p>Boutique: <span className="text-white">Suite 402, Royal Palms, Kochi, Kerala</span></p>
              <p className="pt-2 text-[11px] text-[#635E57]">
                Mon — Sat: 9:00 AM – 8:00 PM IST
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#635E57] gap-4">
          <p>© {new Date().getFullYear()} Jabazi Store. All Rights Reserved.</p>
          <p className="flex items-center gap-1 text-[11px]">
            Crafted for <span className="text-[#F7F1E5]">IsacSmile</span> • Pure Luxury Perfumery
          </p>
        </div>

      </div>
    </footer>
  );
}
