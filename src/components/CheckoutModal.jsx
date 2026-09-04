import React, { useState } from "react";
import { X, ShieldCheck, CheckCircle2, ShoppingBag, ArrowRight } from "lucide-react";

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  onPlaceOrder
}) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const [errors, setErrors] = useState({});

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal >= 75 ? 0 : 15;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email address is required";
    if (!formData.address.trim()) newErrors.address = "Shipping address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const orderData = {
      id: `JAB-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split("T")[0],
      totalAmount: total,
      status: "Processing",
      shippingAddress: { ...formData },
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image
      }))
    };

    onPlaceOrder(orderData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div
        className="relative bg-[#FDFBF7] border border-[#EBE5DC] rounded-lg max-w-3xl w-full overflow-hidden shadow-2xl animate-slide-up my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#EBE5DC] bg-white flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl text-[#191715] font-normal">
              Express Checkout
            </h2>
            <p className="text-xs text-[#635E57] font-sans">
              Enter your shipping details to place your order with Jabazi Store.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#635E57] hover:text-[#191715] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column: Customer & Shipping Address */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-xs font-sans uppercase tracking-widest font-semibold text-[#B88E4B]">
                1. Customer & Shipping Info
              </h3>

              {/* Name */}
              <div>
                <label className="block text-xs font-sans text-[#191715] font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Syed Isac"
                  className={`input-luxury ${errors.name ? "border-red-400" : ""}`}
                />
                {errors.name && <span className="text-[10px] text-red-500">{errors.name}</span>}
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans text-[#191715] font-medium mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={`input-luxury ${errors.phone ? "border-red-400" : ""}`}
                  />
                  {errors.phone && <span className="text-[10px] text-red-500">{errors.phone}</span>}
                </div>

                <div>
                  <label className="block text-xs font-sans text-[#191715] font-medium mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="isac@example.com"
                    className={`input-luxury ${errors.email ? "border-red-400" : ""}`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500">{errors.email}</span>}
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <label className="block text-xs font-sans text-[#191715] font-medium mb-1">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House/Apartment no., Street name"
                  className={`input-luxury ${errors.address ? "border-red-400" : ""}`}
                />
                {errors.address && <span className="text-[10px] text-red-500">{errors.address}</span>}
              </div>

              {/* City, State, Pincode */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-sans text-[#191715] font-medium mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Kochi"
                    className={`input-luxury text-xs px-2.5 ${errors.city ? "border-red-400" : ""}`}
                  />
                  {errors.city && <span className="text-[9px] text-red-500">{errors.city}</span>}
                </div>

                <div>
                  <label className="block text-[11px] font-sans text-[#191715] font-medium mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Kerala"
                    className={`input-luxury text-xs px-2.5 ${errors.state ? "border-red-400" : ""}`}
                  />
                  {errors.state && <span className="text-[9px] text-red-500">{errors.state}</span>}
                </div>

                <div>
                  <label className="block text-[11px] font-sans text-[#191715] font-medium mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="682001"
                    className={`input-luxury text-xs px-2.5 ${errors.pincode ? "border-red-400" : ""}`}
                  />
                  {errors.pincode && <span className="text-[9px] text-red-500">{errors.pincode}</span>}
                </div>
              </div>

            </div>

            {/* Right Column: Order Summary & Place Order */}
            <div className="md:col-span-5 bg-[#F6F2EC] p-5 rounded border border-[#EBE5DC] flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-sans uppercase tracking-widest font-semibold text-[#191715] mb-4 border-b border-[#EBE5DC] pb-2">
                  2. Order Summary
                </h3>

                {/* Items preview list */}
                <div className="space-y-3 mb-4 max-h-48 overflow-y-auto pr-1">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 text-xs font-sans">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-12 object-cover rounded bg-white border border-[#EBE5DC]"
                      />
                      <div className="flex-1">
                        <span className="font-medium text-[#191715] block">{item.name}</span>
                        <span className="text-[#999187]">Qty: {item.quantity}</span>
                      </div>
                      <span className="font-semibold text-[#191715]">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Total breakdown */}
                <div className="space-y-1.5 pt-3 border-t border-[#EBE5DC] text-xs font-sans">
                  <div className="flex justify-between text-[#635E57]">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-[#635E57]">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `$${shipping}`}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-[#191715] pt-2 border-t border-[#EBE5DC]">
                    <span>Total Amount</span>
                    <span className="text-[#B88E4B]">${total}</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-white rounded border border-[#EBE5DC] flex items-center gap-2 text-[11px] text-[#635E57]">
                  <CheckCircle2 className="w-4 h-4 text-[#5DB889] shrink-0" />
                  <span>Payment via Cash on Delivery / UPI upon arrival.</span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 text-xs bg-[#B88E4B] border-[#B88E4B] hover:bg-[#9E7535] shadow-md"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Place Order (${total})</span>
                </button>
              </div>

            </div>

          </div>
        </form>

      </div>
    </div>
  );
}
