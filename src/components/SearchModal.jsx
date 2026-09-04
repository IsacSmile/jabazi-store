import React, { useState } from "react";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";

export default function SearchModal({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) {
  if (!isOpen) return null;

  const [query, setQuery] = useState("");

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
          p.categoryLabel.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-[#FDFBF7] border border-[#EBE5DC] rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="p-4 border-b border-[#EBE5DC] bg-white flex items-center gap-3">
          <Search className="w-5 h-5 text-[#B88E4B]" />
          <input
            type="text"
            placeholder="Search by fragrance name, notes, or category..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none text-sm font-sans focus:outline-none text-[#191715] placeholder-[#999187]"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 text-[#635E57] hover:text-[#191715] transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4">
          {query.trim() === "" ? (
            <div className="py-8 text-center text-xs text-[#999187] font-sans">
              <Sparkles className="w-5 h-5 text-[#B88E4B] mx-auto mb-2" />
              <span>Type a fragrance name like "Oud", "Musk", or "Rose"...</span>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#999187] font-sans">
              No attars matching "{query}". Try another search term.
            </div>
          ) : (
            <div className="space-y-3">
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center gap-4 p-3 rounded-md hover:bg-[#F6F2EC] cursor-pointer transition-colors border border-transparent hover:border-[#EBE5DC]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-14 object-cover rounded bg-[#F6F2EC]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif text-base font-normal text-[#191715]">
                        {product.name}
                      </h4>
                      <span className="gold-tag text-[9px] py-0.5">
                        {product.categoryLabel}
                      </span>
                    </div>
                    <p className="text-xs font-sans text-[#635E57] line-clamp-1">
                      {product.shortDescription}
                    </p>
                  </div>
                  <span className="font-sans font-bold text-sm text-[#191715]">
                    ${product.price}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
