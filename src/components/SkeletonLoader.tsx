import React from 'react';

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white/60 border border-beige-200/60 rounded-xl p-4 flex flex-col space-y-4 animate-pulse">
      <div className="w-full aspect-[4/5] bg-beige-200/80 rounded-lg"></div>
      <div className="space-y-2">
        <div className="h-3 w-1/4 bg-beige-200/80 rounded"></div>
        <div className="h-5 w-3/4 bg-beige-300/80 rounded"></div>
        <div className="h-3 w-full bg-beige-200/60 rounded"></div>
      </div>
      <div className="pt-2 flex justify-between items-center">
        <div className="h-5 w-16 bg-beige-300/80 rounded"></div>
        <div className="h-8 w-24 bg-beige-200/80 rounded-full"></div>
      </div>
    </div>
  );
};

export const CategoryCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white/60 border border-beige-200/60 rounded-xl p-6 flex flex-col space-y-4 animate-pulse">
      <div className="w-full h-44 bg-beige-200/80 rounded-lg"></div>
      <div className="h-6 w-1/3 bg-beige-300/80 rounded"></div>
      <div className="h-4 w-5/6 bg-beige-200/60 rounded"></div>
      <div className="h-4 w-1/2 bg-beige-200/60 rounded"></div>
    </div>
  );
};

export const ProductDetailSkeleton: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 animate-pulse">
      <div className="w-full aspect-square bg-beige-200/80 rounded-2xl"></div>
      <div className="space-y-6 flex flex-col justify-center">
        <div className="h-4 w-24 bg-beige-200/80 rounded"></div>
        <div className="h-10 w-3/4 bg-beige-300/80 rounded"></div>
        <div className="h-6 w-20 bg-beige-300/80 rounded"></div>
        <div className="h-20 w-full bg-beige-200/60 rounded"></div>
        <div className="flex gap-3 pt-4">
          <div className="h-10 w-20 bg-beige-200/80 rounded-full"></div>
          <div className="h-10 w-20 bg-beige-200/80 rounded-full"></div>
          <div className="h-10 w-20 bg-beige-200/80 rounded-full"></div>
        </div>
        <div className="h-12 w-full bg-beige-300/80 rounded-xl pt-4"></div>
      </div>
    </div>
  );
};
