import React from "react";
import { ArrowRight, ShieldCheck, Sparkles, Droplets } from "lucide-react";

export default function Hero({ onShopClick }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:py-20 bg-[#FDFBF7]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F6F2EC] rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="container relative z-10">
        
        {/* Two-Column Desktop Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left animate-slide-up">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F2EC] border border-[#EBE5DC] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#B88E4B]" />
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#635E57]">
                Handcrafted Concentrated Perfume Oils
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-[#191715] tracking-tight mb-6">
              Timeless Fragrance. <br />
              <span className="italic font-light text-[#B88E4B]">Simply Yours.</span>
            </h1>

            {/* Short Description */}
            <p className="font-sans text-base sm:text-lg text-[#635E57] font-normal leading-relaxed max-w-xl mb-8">
              Experience the pure luxury of artisanal attars.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onShopClick}
                className="btn-primary"
              >
                <span>SHOP ATTARS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("categories-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-secondary"
              >
                <span>EXPLORE CATEGORIES</span>
              </button>
            </div>

          </div>

          {/* Right Column: Premium Dummy Attar Bottle Showcase Image */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-md overflow-hidden shadow-2xl bg-[#F6F2EC] group border border-[#EBE5DC]">
              <img
                src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80"
                alt="Jabazi Store Luxury Attar Bottle"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191715]/60 via-transparent to-transparent opacity-70" />

              {/* Product Floating Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded bg-white/95 backdrop-blur-md border border-white/60 flex items-center justify-between shadow-lg">
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-normal text-[#191715]">
                    Royal Oud Reserve
                  </span>
                  <span className="text-xs text-[#635E57] font-sans">
                    Wild Cambodian Agarwood • 12ml
                  </span>
                </div>
                <span className="font-sans font-bold text-[#B88E4B] text-base">$120</span>
              </div>
            </div>
          </div>

        </div>

        {/* Benefits Row below Hero */}
        <div className="mt-14 pt-8 border-t border-[#EBE5DC] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F6F2EC] flex items-center justify-center shrink-0 border border-[#EBE5DC]">
              <Droplets className="w-5 h-5 text-[#B88E4B]" />
            </div>
            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#191715]">
                100% Pure & Alcohol Free
              </h4>
              <p className="text-[11px] text-[#999187] font-sans">Pure oil essence for skin comfort</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F6F2EC] flex items-center justify-center shrink-0 border border-[#EBE5DC]">
              <ShieldCheck className="w-5 h-5 text-[#B88E4B]" />
            </div>
            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#191715]">
                24H+ Long Lasting
              </h4>
              <p className="text-[11px] text-[#999187] font-sans">Enduring fragrance trail</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F6F2EC] flex items-center justify-center shrink-0 border border-[#EBE5DC]">
              <Sparkles className="w-5 h-5 text-[#B88E4B]" />
            </div>
            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#191715]">
                Artisanal Small Batches
              </h4>
              <p className="text-[11px] text-[#999187] font-sans">Hand-distilled with precision</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
