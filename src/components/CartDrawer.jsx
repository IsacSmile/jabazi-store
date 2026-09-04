import React from "react";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles } from "lucide-react";

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  const shipping = subtotal >= 75 || subtotal === 0 ? 0 : 15;
  const total = subtotal + shipping;
  const freeShippingThreshold = 75;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs animate-fade-in">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close cart backdrop"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FDFBF7] shadow-2xl flex flex-col border-l border-[#EBE5DC] animate-slide-in-right">
          
          {/* Cart Header */}
          <div className="p-6 border-b border-[#EBE5DC] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#B88E4B]" />
              <h2 className="font-serif text-2xl text-[#191715] font-normal">Your Cart</h2>
              <span className="text-xs font-sans font-bold bg-[#F6F2EC] text-[#191715] px-2 py-0.5 rounded-full">
                {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#635E57] hover:text-[#191715] transition-colors"
              aria-label="Close Cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#F6F2EC] px-6 py-3 border-b border-[#EBE5DC] text-xs font-sans">
            {subtotal >= freeShippingThreshold ? (
              <div className="flex items-center gap-2 text-[#5DB889] font-medium">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>You've unlocked <strong>FREE Express Shipping!</strong></span>
              </div>
            ) : (
              <div className="space-y-1.5">
                <div className="flex justify-between text-[#635E57]">
                  <span>Add <strong>${freeShippingThreshold - subtotal}</strong> more for Free Shipping</span>
                  <span>{Math.round(progressToFreeShipping)}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#EBE5DC] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#B88E4B] transition-all duration-500"
                    style={{ width: `${progressToFreeShipping}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#F6F2EC] flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-[#999187]" />
                </div>
                <h3 className="font-serif text-xl text-[#191715] mb-2">Your cart is empty</h3>
                <p className="text-xs text-[#635E57] font-sans max-w-xs mb-6">
                  Explore our luxury concentrated attar collection and add your favorite fragrance.
                </p>
                <button
                  onClick={onClose}
                  className="btn-primary text-xs py-2.5 px-6"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 pb-6 border-b border-[#F2EDE6] items-start"
                >
                  {/* Item Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded bg-[#F6F2EC] shrink-0 border border-[#EBE5DC]"
                  />

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between min-h-[96px]">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-lg font-normal text-[#191715]">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#999187] hover:text-[#D9534F] transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <span className="text-xs text-[#999187] font-sans">
                        {item.volume || "12ml Attar Bottle"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#EBE5DC] rounded bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-[#F6F2EC] text-[#191715]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold font-sans text-[#191715]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-[#F6F2EC] text-[#191715]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Total Item Price */}
                      <span className="font-sans font-bold text-sm text-[#191715]">
                        ${item.price * item.quantity}
                      </span>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#EBE5DC] bg-white space-y-4">
              <div className="space-y-2 text-xs font-sans">
                <div className="flex justify-between text-[#635E57]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#191715]">${subtotal}</span>
                </div>
                <div className="flex justify-between text-[#635E57]">
                  <span>Estimated Shipping</span>
                  <span>{shipping === 0 ? "FREE" : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#191715] pt-2 border-t border-[#F2EDE6]">
                  <span>Total</span>
                  <span className="text-[#B88E4B]">${total}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="btn-primary w-full py-3.5 text-xs shadow-md"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
