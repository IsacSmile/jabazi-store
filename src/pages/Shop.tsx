import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductCardSkeleton } from '../components/SkeletonLoader';
import { useShop } from '../context/ShopContext';
import { SlidersHorizontal, Search, RefreshCw, X, Sparkles } from 'lucide-react';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { wishlist } = useShop();

  const selectedCategoryParam = searchParams.get('category') || 'All';
  const searchQueryParam = searchParams.get('search') || '';
  const filterParam = searchParams.get('filter') || '';

  const [activeCategory, setActiveCategory] = useState(selectedCategoryParam);
  const [searchQuery, setSearchQuery] = useState(searchQueryParam);
  const [sortBy, setSortBy] = useState<'featured' | 'low-high' | 'high-low' | 'rating'>('featured');
  const [isSimulatingLoading, setIsSimulatingLoading] = useState(false);

  const categories = ['All', 'Floral', 'Woody', 'Oriental', 'Fresh', 'Musk'];

  useEffect(() => {
    setActiveCategory(selectedCategoryParam);
  }, [selectedCategoryParam]);

  useEffect(() => {
    setSearchQuery(searchQueryParam);
  }, [searchQueryParam]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    const newParams = new URLSearchParams(searchParams);
    if (cat === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', cat);
    }
    newParams.delete('filter');
    setSearchParams(newParams);
  };

  const handleClearFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams({});
  };

  const triggerSkeletonTest = () => {
    setIsSimulatingLoading(true);
    setTimeout(() => setIsSimulatingLoading(false), 900);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (activeCategory !== 'All' && product.category !== activeCategory) {
        return false;
      }
      if (filterParam === 'saved' && !wishlist.includes(product.id)) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesNotes = [...product.notes.top, ...product.notes.heart, ...product.notes.base].some((n) =>
          n.toLowerCase().includes(q)
        );
        return matchesName || matchesDesc || matchesNotes;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'low-high') return a.price - b.price;
      if (sortBy === 'high-low') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [activeCategory, searchQuery, sortBy, filterParam, wishlist]);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6 sm:space-y-8">
      
      {/* Page Title Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-beige-200 pb-4 sm:pb-6 gap-3">
        <div>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-700 font-medium">Olfactory Treasury</span>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl text-charcoal-900 font-light mt-0.5">
            {filterParam === 'saved' ? 'Saved Scents' : activeCategory === 'All' ? 'All Artisan Attars' : `${activeCategory} Collection`}
          </h1>
        </div>

        <div className="flex items-center justify-between sm:justify-end space-x-3 text-xs text-charcoal-600">
          <span>Showing <strong className="text-charcoal-900 font-semibold">{filteredProducts.length}</strong> creations</span>
          <button
            onClick={triggerSkeletonTest}
            className="flex items-center space-x-1.5 bg-beige-200/60 hover:bg-beige-200 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-charcoal-800 text-[10px] sm:text-xs transition-colors"
            title="Demonstrate skeleton loading animation state"
          >
            <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Simulate Loading</span>
          </button>
        </div>
      </div>

      {/* FILTER TOOLBAR */}
      <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-3 bg-cream-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-beige-200">
        
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 lg:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat && filterParam !== 'saved';
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-[10px] sm:text-xs px-3 py-1.5 sm:px-4 sm:py-2 rounded-full uppercase tracking-wider font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-charcoal-900 text-cream-50 shadow-sm'
                    : 'bg-cream-100 text-charcoal-700 hover:bg-beige-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
          <button
            onClick={() => setSearchParams({ filter: 'saved' })}
            className={`text-[10px] sm:text-xs px-3 py-1.5 sm:px-4 sm:py-2 rounded-full uppercase tracking-wider font-medium whitespace-nowrap transition-all ${
              filterParam === 'saved'
                ? 'bg-gold-600 text-charcoal-950 shadow-sm'
                : 'bg-cream-100 text-charcoal-700 hover:bg-beige-200'
            }`}
          >
            Saved ({wishlist.length})
          </button>
        </div>

        {/* Search & Sort Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-beige-300 rounded-full pl-8 pr-7 sm:pl-9 sm:pr-8 py-1.5 sm:py-2 text-[11px] sm:text-xs text-charcoal-900 focus:outline-none focus:border-gold-600"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-800"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1.5 bg-white border border-beige-300 rounded-full px-2.5 py-1.5 text-[11px] sm:text-xs text-charcoal-800 flex-shrink-0">
            <SlidersHorizontal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-charcoal-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-[11px] sm:text-xs text-charcoal-900 font-medium focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>
      </div>

      {/* Active Filter Badges */}
      {(searchQuery || activeCategory !== 'All' || filterParam) && (
        <div className="flex items-center gap-2 text-[11px] sm:text-xs">
          <span className="text-charcoal-500 font-light">Filters:</span>
          {activeCategory !== 'All' && (
            <span className="bg-beige-200 text-charcoal-800 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
              Category: {activeCategory}
              <X className="w-3 h-3 cursor-pointer" onClick={() => handleCategoryChange('All')} />
            </span>
          )}
          {searchQuery && (
            <span className="bg-beige-200 text-charcoal-800 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
              Query: "{searchQuery}"
              <X className="w-3 h-3 cursor-pointer" onClick={() => setSearchQuery('')} />
            </span>
          )}
          <button
            onClick={handleClearFilters}
            className="text-gold-700 hover:underline font-medium ml-1"
          >
            Clear
          </button>
        </div>
      )}

      {/* PRODUCT GRID - 2 columns on mobile */}
      {isSimulatingLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="bg-cream-50 border border-beige-200 rounded-2xl sm:rounded-3xl p-10 sm:p-16 text-center space-y-3 max-w-md mx-auto my-8">
          <Sparkles className="w-8 h-8 text-gold-600 mx-auto stroke-1 animate-pulse" />
          <h3 className="font-serif text-xl sm:text-2xl text-charcoal-900">No Fragrances Found</h3>
          <p className="text-xs text-charcoal-600 font-light">
            We couldn't find any attars matching your current filter selection or search query.
          </p>
          <button
            onClick={handleClearFilters}
            className="bg-charcoal-900 text-cream-50 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-gold-700 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </div>
  );
};
