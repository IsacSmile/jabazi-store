import React from "react";
import { Sparkles, CheckCircle2, ShoppingBag, X } from "lucide-react";

export default function ToastNotification({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up max-w-sm w-full">
      <div className="bg-[#191715] text-white p-4 rounded-md shadow-2xl border border-[#B88E4B]/40 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#B88E4B]/20 text-[#B88E4B] flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-serif text-sm font-normal text-[#F7F1E5]">
              {toast.title}
            </h4>
            <p className="font-sans text-xs text-[#999187]">
              {toast.message}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="text-[#999187] hover:text-white transition-colors"
          aria-label="Dismiss toast"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
