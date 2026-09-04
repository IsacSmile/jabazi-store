import React, { useState, useEffect } from "react";
import { ShoppingBag, Search, Menu, X, Clock, Sparkles, UserCheck } from "lucide-react";

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
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
    
    // Smooth scroll to top or section if on home page
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "shop") {
      const el = document.getElementById("shop-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (id === "categories") {
      const el = document.getElementById("categories-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className={`nav-sticky ${isScrolled ? "nav-scrolled" : "bg-transparent py-2"}`}>
      {/* Top Banner */}
      <div className="bg-[#191715] text-[#F7F1E5] text-[11px] py-1.5 px-4 text-center font-sans tracking-widest uppercase flex items-center justify-center gap-2">
        <Sparkles className="w-3 h-3 text-[#B88E4B]" />
        <span>Free Express Shipping on Orders Over $75 • 100% Pure Alcohol-Free Attars</span>
        <Sparkles className="w-3 h-3 text-[#B88E4B]" />
      </div>

      <div className="container py-4 flex items-center justify-between">
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
          className="cursor-pointer group flex items-center gap-2 select-none"
        >
          <div className="w-7 h-7 rounded-full bg-[#191715] text-[#B88E4B] flex items-center justify-center font-serif text-sm font-bold group-hover:bg-[#B88E4B] group-hover:text-white transition-all">
            J
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-normal tracking-[0.15em] text-[#191715] group-hover:text-[#B88E4B] transition-colors">
              JABAZI STORE
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#999187] font-sans -mt-1">
              Pure Attar Essence
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
                className={`relative font-sans text-xs uppercase tracking-[0.15em] transition-colors py-1 ${
                  isActive
                    ? "text-[#191715] font-semibold"
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
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B88E4B] animate-fade-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions (Search & Cart) */}
        <div className="flex items-center gap-4">
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
            className="relative flex items-center gap-2 bg-[#191715] hover:bg-[#B88E4B] text-white px-3.5 py-2 rounded-sm transition-all"
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

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[105px] bg-[#FDFBF7] border-b border-[#EBE5DC] shadow-lg animate-slide-up z-40 py-6 px-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-sans text-sm uppercase tracking-widest py-2 border-b border-[#F2EDE6] flex items-center justify-between ${
                  activeTab === item.id
                    ? "text-[#B88E4B] font-semibold"
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

            <div className="pt-2 flex items-center justify-between text-xs text-[#999187]">
              <span>Need help? Contact support</span>
              <span className="text-[#B88E4B] font-medium">+1 (800) JABAZI</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
