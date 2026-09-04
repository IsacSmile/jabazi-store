import React, { useState } from "react";
import { CATEGORIES } from "../data/products";
import { ShoppingBag, Eye, Star, Sparkles, Check, Search, Filter } from "lucide-react";

export default function FeaturedProducts({
  products,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onSelectProduct,
  searchQuery,
  setSearchQuery
}) {
  const [addedItems, setAddedItems] = useState({});
  const [sortBy, setSortBy] = useState("featured");

  // Filter products by category & search
  let filtered = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting logic
  if (sortBy === "price-low") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  const handleAddClick = (product, e) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section id="shop-section" className="py-16 md:py-24 bg-[#FDFBF7]">
      <div className="container">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B88E4B] block mb-2 font-sans">
            Artisanal Fragrance Collection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#191715] font-normal mb-4">
            Featured Attars
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#635E57] font-normal">
            Hand-poured pure oil perfume elixirs. Crafted for unmatched longevity, depth, and distinction.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#EBE5DC]">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-sans whitespace-nowrap rounded-sm transition-all ${
                    isActive
                      ? "bg-[#191715] text-[#F7F1E5] font-medium"
                      : "bg-[#F6F2EC] text-[#635E57] hover:bg-[#EBE5DC] hover:text-[#191715]"
                  }`}
                >
                  {cat.shortName}
                </button>
              );
            })}
          </div>

          {/* Search & Sort */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            {/* Search input */}
            <div className="relative flex-1 md:w-56">
              <Search className="w-4 h-4 text-[#999187] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search attars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs font-sans bg-[#F6F2EC] border border-[#EBE5DC] rounded-sm focus:outline-none focus:border-[#B88E4B]"
              />
            </div>

            {/* Sort Select */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-[#F6F2EC] border border-[#EBE5DC] text-xs font-sans text-[#191715] px-3 py-2 pr-7 rounded-sm focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-16 bg-[#F6F2EC] rounded-md">
            <Sparkles className="w-8 h-8 text-[#B88E4B] mx-auto mb-3" />
            <h3 className="font-serif text-xl text-[#191715] mb-2">No Attars Found</h3>
            <p className="text-xs text-[#635E57] font-sans mb-4">
              Try adjusting your category filter or search keywords.
            </p>
            <button
              onClick={() => {
                onSelectCategory("all");
                setSearchQuery("");
              }}
              className="btn-secondary text-xs py-2 px-4"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filtered.map((product) => {
            const isAdded = addedItems[product.id];

            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group relative bg-white border border-[#EBE5DC] rounded-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-[4/5] bg-[#F6F2EC] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Top Tags */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                    <span className="gold-tag shadow-sm">
                      {product.categoryLabel}
                    </span>
                    {product.isPremium && (
                      <span className="bg-[#191715] text-[#F7F1E5] text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full">
                        Reserve
                      </span>
                    )}
                  </div>

                  {/* Quick View Floating Overlay Button */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="bg-white/95 text-[#191715] hover:bg-[#B88E4B] hover:text-white px-4 py-2 rounded text-xs font-sans font-medium uppercase tracking-wider flex items-center gap-2 shadow-lg transition-colors transform translate-y-2 group-hover:translate-y-0 duration-300"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Product Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating & Volume */}
                    <div className="flex items-center justify-between text-xs text-[#999187] mb-2 font-sans">
                      <div className="flex items-center gap-1 text-[#B88E4B]">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-medium">{product.rating}</span>
                        <span className="text-[#999187]">({product.reviewsCount})</span>
                      </div>
                      <span>{product.volume}</span>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-serif text-xl font-normal text-[#191715] group-hover:text-[#B88E4B] transition-colors mb-1.5">
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="font-sans text-xs text-[#635E57] line-clamp-2 leading-relaxed mb-4">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Footer Row: Price & Add to Cart */}
                  <div className="pt-3 border-t border-[#F2EDE6] flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#999187] uppercase font-sans tracking-wider">Price</span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-sans font-bold text-lg text-[#191715]">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="font-sans text-xs text-[#999187] line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleAddClick(product, e)}
                      className={`p-2.5 rounded transition-all duration-300 flex items-center gap-1.5 ${
                        isAdded
                          ? "bg-[#5DB889] text-white"
                          : "bg-[#191715] hover:bg-[#B88E4B] text-white"
                      }`}
                      aria-label="Add to Cart"
                      title="Add to Cart"
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span className="text-[11px] uppercase font-medium pr-1">Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span className="hidden sm:inline text-[11px] uppercase font-medium pr-1">Add</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
