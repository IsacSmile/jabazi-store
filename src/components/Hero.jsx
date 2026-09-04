import React from "react";
import { ArrowRight, ShieldCheck, Sparkles, Droplets, Heart } from "lucide-react";

export default function Hero({ onShopClick }) {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:py-24 bg-[#FDFBF7]">
      {/* Decorative subtle ambient backdrop element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F7F1E5] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left animate-slide-up">
            
            {/* Top Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F2EC] border border-[#EBE5DC] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#B88E4B]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#635E57]">
                Handcrafted Concentrated Perfume Oils
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#191715] tracking-tight mb-6">
              Timeless Fragrance. <br />
              <span className="italic font-light text-[#B88E4B]">Simply Yours.</span>
            </h1>

            {/* Supporting Text */}
            <p className="font-sans text-base sm:text-lg text-[#635E57] font-normal leading-relaxed max-w-xl mb-8">
              Experience the pure luxury of artisanal attars. Distilled from rare Cambodian agarwood, wild Taif roses, and aged amber resins without a single drop of alcohol.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
              <button
                onClick={onShopClick}
                className="btn-primary w-full sm:w-auto shadow-md"
              >
                <span>Shop Attars</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("categories-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-secondary w-full sm:w-auto"
              >
                Explore Categories
              </button>
            </div>

            {/* Micro Feature Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#EBE5DC] w-full max-w-lg">
              <div className="flex items-center gap-2.5">
                <Droplets className="w-4 h-4 text-[#B88E4B] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-semibold text-[#191715]">100% Pure</span>
                  <span className="text-[11px] text-[#999187]">Alcohol Free</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#B88E4B] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-semibold text-[#191715]">24H+ Wear</span>
                  <span className="text-[11px] text-[#999187]">Long Lasting</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#B88E4B] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-semibold text-[#191715]">Artisanal</span>
                  <span className="text-[11px] text-[#999187]">Small Batches</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column Product Image Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Main Luxury Image Frame */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-lg overflow-hidden shadow-2xl bg-[#F6F2EC] group">
              <img
                src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80"
                alt="Jabazi Royal Attar Bottle"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

              {/* Floating Product Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-white/90 backdrop-blur-md border border-white/50 flex items-center justify-between shadow-lg">
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-medium text-[#191715]">
                    Royal Oud Reserve
                  </span>
                  <span className="text-xs text-[#635E57] font-sans">
                    Wild Cambodian Agarwood • 12ml
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-sans font-bold text-[#B88E4B] text-base">$120</span>
                </div>
              </div>
            </div>

            {/* Decorative Gold Accent Tag */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center justify-center w-24 h-24 rounded-full bg-[#191715] text-[#F7F1E5] text-[10px] uppercase font-sans tracking-widest text-center border-4 border-[#FDFBF7] shadow-xl rotate-12">
              <span>Pure<br />Oil<br />Essence</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
