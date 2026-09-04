import React from "react";
import { Sparkles } from "lucide-react";

export default function SkeletonLoader({ fadeOut }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FDFBF7] transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ minHeight: "100vh" }}
    >
      <div className="flex flex-col items-center text-center px-6 max-w-md w-full">
        {/* Brand Logo Header */}
        <div className="flex items-center gap-2 mb-3 animate-fade-in">
          <Sparkles className="w-5 h-5 text-[#B88E4B] animate-spin" style={{ animationDuration: '4s' }} />
          <span className="font-serif text-3xl font-light tracking-widest text-[#191715]">
            JABAZI STORE
          </span>
          <Sparkles className="w-5 h-5 text-[#B88E4B] animate-spin" style={{ animationDuration: '4s' }} />
        </div>

        <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#999187] mb-8">
          Timeless Fragrance • Artisanal Attars
        </p>

        {/* Minimal Luxury Skeleton Bars */}
        <div className="w-full space-y-4">
          {/* Hero Banner Skeleton */}
          <div className="skeleton-loading h-48 w-full rounded-md opacity-80" />
          
          {/* Content Skeletons */}
          <div className="flex gap-4">
            <div className="skeleton-loading h-12 w-1/3 rounded-md opacity-70" />
            <div className="skeleton-loading h-12 w-2/3 rounded-md opacity-70" />
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="skeleton-loading h-24 rounded-md opacity-60" />
            <div className="skeleton-loading h-24 rounded-md opacity-60" />
            <div className="skeleton-loading h-24 rounded-md opacity-60" />
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 text-xs text-[#635E57]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#B88E4B] animate-ping" />
          <span className="tracking-wider uppercase">Loading Luxury Collection...</span>
        </div>
      </div>
    </div>
  );
}
