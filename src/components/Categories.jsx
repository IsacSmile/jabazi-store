import React from "react";
import { CATEGORIES } from "../data/products";
import { ArrowUpRight } from "lucide-react";

export default function Categories({ selectedCategory, onSelectCategory }) {
  return (
    <section id="categories-section" className="py-16 md:py-24 bg-[#F6F2EC]">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#EBE5DC] pb-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B88E4B] block mb-2 font-sans">
              Olfactory Families
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#191715] font-normal">
              Curated Categories
            </h2>
          </div>
          <p className="text-sm text-[#635E57] font-sans max-w-md mt-4 md:mt-0">
            Explore our artisanal perfume families, each carefully formulated with rare concentrated essences.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.filter(cat => cat.id !== "all").map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  const el = document.getElementById("shop-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`group relative rounded-md overflow-hidden cursor-pointer aspect-[3/4] bg-[#EBE5DC] transition-all duration-300 ${
                  isSelected
                    ? "ring-2 ring-[#B88E4B] shadow-lg scale-[1.02]"
                    : "hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {/* Category Card Image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#191715]/90 via-[#191715]/30 to-transparent transition-opacity group-hover:opacity-95" />

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-sans uppercase tracking-widest text-[#B88E4B] font-semibold">
                      {cat.count} Fragrance{cat.count > 1 ? "s" : ""}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-[#B88E4B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-wide text-white mt-1">
                    {cat.name}
                  </h3>
                </div>

                {/* Selected Indicator */}
                {isSelected && (
                  <div className="absolute top-3 right-3 bg-[#B88E4B] text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full shadow">
                    Active
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
