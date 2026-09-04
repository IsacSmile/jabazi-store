import React, { useState, useEffect } from "react";
import { ShoppingBag, Search, Menu, X, Sparkles } from "lucide-react";

export default function Navbar({
  cartCount,
  onOpenCart,
  activeTab,
  setActiveTab,
  onOpenSearch,
  ordersCount = 0
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "shop", label: "Shop" },
    { id: "categories", label: "Categories" },
    { id: "orders", label: "Order History", badge: ordersCount > 0 ? ordersCount : null },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "shop") {
      const el = document.getElementById("shop-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "categories") {
      const el = document.getElementById("categories-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className={`nav-sticky ${isScrolled ? "nav-scrolled py-3" : "bg-transparent py-4"}`}>
      
      {/* Top Notification Bar */}
      <div className="bg-[#191715] text-[#F7F1E5] text-[11px] py-1.5 px-4 text-center font-sans tracking-widest uppercase flex items-center justify-center gap-2">
        <Sparkles className="w-3 h-3 text-[#B88E4B]" />
        <span>Free Shipping over $75 • 100% Pure Alcohol-Free Attars</span>
        <Sparkles className="w-3 h-3 text-[#B88E4B]" />
      </div>

      <div className="container py-3 flex items-center justify-between">
        
        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#191715] p-2 hover:text-[#B88E4B] transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick("home")}
          className="cursor-pointer group flex items-center gap-2.5 select-none"
        >
          <div className="w-8 h-8 rounded-full bg-[#191715] text-[#B88E4B] flex items-center justify-center font-serif text-base font-bold group-hover:bg-[#B88E4B] group-hover:text-white transition-all">
            J
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-normal tracking-[0.12em] text-[#191715] group-hover:text-[#B88E4B] transition-colors">
              JABAZI STORE
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#999187] font-sans -mt-1">
              Perfume Oils & Attars
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative font-sans text-xs uppercase tracking-[0.12em] transition-colors py-1.5 ${
                  isActive
                    ? "text-[#191715] font-bold"
                    : "text-[#635E57] hover:text-[#B88E4B]"
                }`}
              >
                {item.label}
                {item.badge && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-[#B88E4B] text-white">
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B88E4B]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Search & Cart */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#635E57] hover:text-[#B88E4B] transition-colors"
            title="Search fragrances"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 bg-[#191715] hover:bg-[#B88E4B] text-white px-3.5 py-2 rounded-sm transition-all shadow-sm"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-4 h-4 text-[#F7F1E5]" />
            <span className="hidden sm:inline font-sans text-xs uppercase tracking-wider font-medium">
              Cart
            </span>
            <span className="w-5 h-5 rounded-full bg-[#B88E4B] text-white text-[10px] font-bold flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#EBE5DC] shadow-lg animate-slide-up py-4 px-6">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-sans text-sm uppercase tracking-widest py-2 border-b border-[#F2EDE6] flex items-center justify-between ${
                  activeTab === item.id
                    ? "text-[#B88E4B] font-bold"
                    : "text-[#191715]"
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#B88E4B] text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

    </header>
  );
}
